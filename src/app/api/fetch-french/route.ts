// src/app/api/fetch-french/route.ts
import { NextResponse } from 'next/server'
import { frenchSourcesService } from '@/services/frenchSources'

export async function POST() {
  try {
    const articles = await frenchSourcesService.fetchAllFrenchSources()

    return NextResponse.json({
      success: true,
      message: `${articles.length} articles français récupérés et sauvegardés`,
      count: articles.length,
      articles: articles.slice(0, 5) // Aperçu des 5 premiers
    })
  } catch (error) {
    console.error('Erreur API fetch-french:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Erreur lors de la récupération des articles français'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const articles = await frenchSourcesService.getFrenchArticlesFromDB()

    return NextResponse.json({
      success: true,
      count: articles.length,
      articles
    })
  } catch (error) {
    console.error('Erreur API get-french:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Erreur lors de la récupération des articles français depuis la DB'
      },
      { status: 500 }
    )
  }
}
