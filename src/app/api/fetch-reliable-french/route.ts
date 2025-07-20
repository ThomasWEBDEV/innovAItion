import { NextResponse } from 'next/server';
import { reliableFrenchSourcesService } from '@/services/reliableFrenchSources';

export async function POST() {
  try {
    console.log('🇫🇷 Démarrage fetch sources françaises fiables...');

    const result = await reliableFrenchSourcesService.fetchAndSaveReliableFrenchSources();

    if (result.success) {
      return NextResponse.json({
        message: 'Sources françaises fiables récupérées avec succès',
        count: result.count,
        articles: result.articles.slice(0, 5), // Affiche 5 premiers pour debug
        success: true
      });
    } else {
      return NextResponse.json({
        error: 'Erreur lors de la récupération des sources fiables',
        count: 0
      }, { status: 500 });
    }

  } catch (error) {
    console.error('❌ Erreur API sources fiables:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la récupération' },
      { status: 500 }
    );
  }
}
