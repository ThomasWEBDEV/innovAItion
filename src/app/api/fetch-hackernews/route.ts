// src/app/api/fetch-hackernews/route.ts
import { NextResponse } from 'next/server'
import { hackerNewsService } from '@/services/hackernews'

export async function POST() {
  try {
    const articles = await hackerNewsService.fetchAndSaveArticles()

    return NextResponse.json({
      success: true,
      message: `${articles.length} articles HackerNews récupérés et sauvegardés`,
      count: articles.length,
      articles: articles.slice(0, 5) // Aperçu des 5 premiers
    })
  } catch (error) {
    console.error('Erreur API fetch-hackernews:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Erreur lors de la récupération des articles HackerNews'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const articles = await hackerNewsService.getArticlesFromDB()

    return NextResponse.json({
      success: true,
      count: articles.length,
      articles
    })
  } catch (error) {
    console.error('Erreur API get-hackernews:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Erreur lors de la récupération des articles depuis la DB'
      },
      { status: 500 }
    )
  }
}
