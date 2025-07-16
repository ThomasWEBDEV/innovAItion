// src/components/HackerNewsTest.tsx
'use client'

import { useState } from 'react'

interface Article {
  id: string
  title: string
  url: string
  score: number
  source: string
  created_at: string
}

export default function HackerNewsTest() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const fetchFrenchArticles = async () => {
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/fetch-french', {
        method: 'POST'
      })
      const data = await response.json()

      if (data.success) {
        setMessage(`🇫🇷 ${data.count} articles français récupérés`)
        loadArticles() // Recharge la liste
      } else {
        setMessage(`❌ Erreur: ${data.error}`)
      }
    } catch (error) {
      setMessage(`❌ Erreur réseau: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const fetchArticles = async () => {
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/fetch-hackernews', {
        method: 'POST'
      })
      const data = await response.json()

      if (data.success) {
        setMessage(`✅ ${data.count} articles récupérés`)
        loadArticles() // Recharge la liste
      } else {
        setMessage(`❌ Erreur: ${data.error}`)
      }
    } catch (error) {
      setMessage(`❌ Erreur réseau: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const loadArticles = async () => {
    try {
      const response = await fetch('/api/fetch-hackernews')
      const data = await response.json()

      if (data.success) {
        setArticles(data.articles)
      }
    } catch (error) {
      console.error('Erreur chargement articles:', error)
    }
  }

  // Charge les articles au montage
  useState(() => {
    loadArticles()
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🔥 Test HackerNews API
        </h2>

        <div className="flex gap-4 items-center mb-4 flex-wrap">
          <button
            onClick={fetchArticles}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400
                     text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            {loading ? '🔄 Récupération...' : '📥 Fetch HackerNews'}
          </button>

          <button
            onClick={fetchFrenchArticles}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400
                     text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            {loading ? '🔄 Récupération...' : '🇫🇷 Fetch Sources FR'}
          </button>

          <button
            onClick={loadArticles}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2
                     rounded-md font-medium transition-colors"
          >
            🔄 Recharger
          </button>
        </div>

        {message && (
          <div className={`p-3 rounded-md mb-4 ${
            message.includes('✅')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {message}
          </div>
        )}

        <div className="text-sm text-gray-600">
          <strong>Articles en DB:</strong> {articles.length}
        </div>
      </div>

      {/* Liste des articles */}
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    ⭐ {article.score}
                  </span>
                  <span className="flex items-center gap-1">
                    🔥 {article.source}
                  </span>
                  <span>
                    📅 {new Date(article.created_at).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-700
                         px-3 py-1 rounded-md text-sm transition-colors"
              >
                🔗 Lire
              </a>
            </div>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun article en base. Cliquez sur "Fetch Articles" pour commencer.
        </div>
      )}
    </div>
  )
}
