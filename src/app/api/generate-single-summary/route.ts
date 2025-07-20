import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { generateSummary } from '@/services/openai';

export async function POST(request: Request) {
  try {
    const { articleId } = await request.json();

    if (!articleId) {
      return NextResponse.json({ error: 'ID article manquant' }, { status: 400 });
    }

    console.log(`🤖 Génération résumé pour article ${articleId}`);

    // Récupérer l'article
    const { data: article, error: fetchError } = await supabase
      .from('articles')
      .select('id, title, url, summary')
      .eq('id', articleId)
      .single();

    if (fetchError || !article) {
      console.error('Erreur récupération article:', fetchError);
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
    }

    if (article.summary) {
      return NextResponse.json({
        message: 'Article déjà résumé',
        summary: article.summary
      });
    }

    // Générer le résumé
    const summary = await generateSummary({
      id: article.id,
      title: article.title,
      url: article.url
    });

    // Mettre à jour la base de données
    const { error: updateError } = await supabase
      .from('articles')
      .update({ summary })
      .eq('id', articleId);

    if (updateError) {
      console.error('Erreur mise à jour:', updateError);
      return NextResponse.json({ error: 'Erreur sauvegarde' }, { status: 500 });
    }

    console.log(`✅ Résumé généré pour ${articleId}`);

    return NextResponse.json({
      message: 'Résumé généré avec succès',
      summary,
      articleId
    });

  } catch (error) {
    console.error('❌ Erreur génération résumé unique:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
