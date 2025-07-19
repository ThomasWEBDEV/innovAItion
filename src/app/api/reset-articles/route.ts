import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function DELETE() {
  try {
    const { error } = await supabase
      .from('articles')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000')

    if (error) throw error

    return NextResponse.json({
      success: true,
      message: 'Base de données vidée avec succès'
    })
  } catch (error) {
    console.error('Erreur reset:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur suppression' },
      { status: 500 }
    )
  }
}
