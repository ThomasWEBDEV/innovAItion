'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SupabaseTest() {
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('articles').select('count').limit(1)
        setConnected(!error)
      } catch (err) {
        setConnected(false)
      }
      setLoading(false)
    }
    testConnection()
  }, [])

  if (loading) return <div className="text-yellow-600">🔄 Test connexion...</div>
  return (
    <div className={`p-4 rounded ${connected ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {connected ? '✅ Supabase connecté !' : '❌ Erreur connexion'}
    </div>
  )
}
