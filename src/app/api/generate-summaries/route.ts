import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { generateBatchSummaries } from '@/services/openai';

export async function POST() {
  try {
    console.log('🤖 Démarrage génération résumés...');

    // Récupérer les articles sans résumé
    const { data: articles, error: fetchError } = await supabase
      .from('articles')
      .select('id, title, url, summary')
      .or('summary.is.null,summary.eq.""');

    if (fetchError) {
      console.error('Erreur récupération articles:', fetchError);
      return NextResponse.json({ error: 'Erreur base de données' }, { status: 500 });
    }

    if (!articles || articles.length === 0) {
      return NextResponse.json({
        message: 'Tous les articles ont déjà des résumés',
        count: 0
      });
    }

    console.log(`📊 ${articles.length} articles à résumer`);

    // Générer les résumés
    const summaries = await generateBatchSummaries(
      articles.map(article => ({
        id: article.id,
        title: article.title,
        url: article.url
      }))
    );

    console.log(`✅ ${summaries.length} résumés générés`);

    // Mettre à jour la base de données
    let successCount = 0;
    let errorCount = 0;

    for (const { id, summary } of summaries) {
      const { error: updateError } = await supabase
        .from('articles')
        .update({ summary })
        .eq('id', id);

      if (updateError) {
        console.error(`❌ Erreur mise à jour article ${id}:`, updateError);
        errorCount++;
      } else {
        successCount++;
      }
    }

    console.log(`🎯 Résultats: ${successCount} succès, ${errorCount} erreurs`);

    return NextResponse.json({
      message: 'Résumés générés avec succès',
      totalProcessed: summaries.length,
      successCount,
      errorCount,
      summaries: summaries.slice(0, 3) // Premiers résumés pour debug
    });

  } catch (error) {
    console.error('❌ Erreur génération résumés:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la génération' },
      { status: 500 }
    );
  }
}
