// src/components/SimpleTest.tsx
'use client'

import { useState, useEffect } from 'react'

export default function SimpleTest() {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Charge les articles au démarrage
  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      console.log('🔄 Chargement articles...')
      const response = await fetch('/api/all-articles')
      const data = await response.json()

      console.log('📊 Réponse API:', data)

      if (data.success && data.articles) {
        setArticles(data.articles)
        setMessage(`✅ ${data.articles.length} articles chargés`)
      } else {
        setMessage('❌ Pas d\'articles trouvés')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setMessage(`❌ Erreur: ${error}`)
    }
  }

  const fetchHN = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/fetch-hackernews', { method: 'POST' })
      const data = await response.json()
      setMessage(`🔥 ${data.message}`)
      await loadArticles() // Recharge après fetch
    } catch (error) {
      setMessage(`❌ Erreur: ${error}`)
    }
    setLoading(false)
  }

  const fetchFR = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/fetch-french', { method: 'POST' })
      const data = await response.json()
      setMessage(`🇫🇷 ${data.message}`)
      await loadArticles() // Recharge après fetch
    } catch (error) {
      setMessage(`❌ Erreur: ${error}`)
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔧 Test Simple API</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={fetchHN}
          disabled={loading}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          {loading ? '⏳' : '🔥'} HackerNews
        </button>

        <button
          onClick={fetchFR}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? '⏳' : '🇫🇷'} Sources FR
        </button>

        <button
          onClick={loadArticles}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          🔄 Recharger
        </button>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 rounded">
          {message}
        </div>
      )}

      <div className="text-sm mb-4">
        <strong>Total articles:</strong> {articles.length}
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {articles.map((article, index) => (
          <div key={index} className="p-3 border rounded hover:bg-gray-50">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              {article.title}
            </a>
            <div className="text-sm text-gray-600 mt-1">
              ⭐ {article.score} | 🏷️ {article.source} | 📅 {new Date(article.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun article trouvé. Essayez de fetcher des articles.
        </div>
      )}
    </div>
  )
}
