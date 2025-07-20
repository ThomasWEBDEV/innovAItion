import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function DELETE() {
  try {
    console.log('🗑️ Suppression de tous les articles...');

    // Supprimer tous les articles
    const { error } = await supabase
      .from('articles')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Supprime tout sauf un ID impossible

    if (error) {
      console.error('Erreur suppression:', error);
      return NextResponse.json({ error: 'Erreur suppression' }, { status: 500 });
    }

    console.log('✅ Tous les articles supprimés');

    return NextResponse.json({
      message: 'Tous les articles ont été supprimés',
      success: true
    });

  } catch (error) {
    console.error('❌ Erreur suppression articles:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
