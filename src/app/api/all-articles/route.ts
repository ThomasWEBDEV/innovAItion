// src/app/api/all-articles/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .order('score', { ascending: false })
      .limit(50)

    if (error) throw error

    return NextResponse.json({
      success: true,
      count: articles?.length || 0,
      articles: articles || []
    })
  } catch (error) {
    console.error('Erreur récupération tous articles:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur récupération articles' },
      { status: 500 }
    )
  }
}
