'use client'

import { useState } from 'react';

interface Article {
  id: string;
  title: string;
  url: string;
  source: string;
  score?: number;
  summary?: string;
  created_at: string;
}

export default function SimpleTest() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [singleSummaryLoading, setSingleSummaryLoading] = useState<string | null>(null);
  const [clearLoading, setClearLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchAllArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data.articles || []);
      setMessage(`✅ ${data.articles?.length || 0} articles chargés`);
    } catch (error) {
      setMessage('❌ Erreur de chargement');
      console.error('Erreur:', error);
    }
    setLoading(false);
  };

  const fetchHackerNews = async () => {
    setLoading(true);
    setMessage('🔄 Récupération HackerNews...');
    try {
      const response = await fetch('/api/fetch-hackernews', { method: 'POST' });
      const data = await response.json();
      setMessage(`🟠 ${data.count} articles HackerNews ajoutés`);
      await fetchAllArticles();
    } catch (error) {
      setMessage('❌ Erreur HackerNews');
      console.error('Erreur:', error);
    }
    setLoading(false);
  };

  const fetchFrenchSources = async () => {
    setLoading(true);
    setMessage('🔄 Récupération sources FR...');
    try {
      const response = await fetch('/api/fetch-french-sources', { method: 'POST' });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur inconnue');
      }

      setMessage(`🇫🇷 ${data.addedCount || 0} nouveaux articles français ajoutés`);
      await fetchAllArticles();
    } catch (error) {
      setMessage('❌ Erreur sources françaises');
      console.error('Erreur:', error);
    }
    setLoading(false);
  };

  const generateSummaries = async () => {
    setSummaryLoading(true);
    try {
      const response = await fetch('/api/generate-summaries', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        setMessage(`🤖 ${data.successCount} résumés IA générés avec succès`);
        await fetchAllArticles();
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Erreur génération résumés');
      console.error('Erreur:', error);
    }
    setSummaryLoading(false);
  };

  const generateSingleSummary = async (articleId: string) => {
    setSingleSummaryLoading(articleId);
    try {
      const response = await fetch('/api/generate-single-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ Résumé IA généré pour l'article`);
        await fetchAllArticles();
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Erreur génération résumé');
      console.error('Erreur:', error);
    }
    setSingleSummaryLoading(null);
  };

  const clearAllArticles = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer TOUS les articles ?')) {
      return;
    }

    setClearLoading(true);
    try {
      const response = await fetch('/api/clear-articles', { method: 'DELETE' });
      const data = await response.json();

      if (response.ok) {
        setArticles([]);
        setMessage(`🗑️ ${data.deletedCount} articles supprimés`);
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Erreur suppression');
      console.error('Erreur:', error);
    }
    setClearLoading(false);
  };

  // Statistiques
  const articlesWithSummary = articles.filter(a => a.summary);
  const articlesWithoutSummary = articles.filter(a => !a.summary);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🚀 Agrégateur Tech News</h1>
        <p className="text-gray-600">Interface de test pour l'agrégation d'actualités tech avec résumés IA</p>
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={fetchHackerNews}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 transition-all duration-200 flex items-center gap-2"
        >
          🟠 HackerNews
        </button>

        <button
          onClick={fetchFrenchSources}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 transition-all duration-200 flex items-center gap-2"
        >
          🇫🇷 Sources FR
        </button>

        <button
          onClick={fetchAllArticles}
          disabled={loading}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 transition-all duration-200 flex items-center gap-2"
        >
          🔄 Recharger
        </button>

        <button
          onClick={generateSummaries}
          disabled={summaryLoading || articlesWithoutSummary.length === 0}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 transition-all duration-200 flex items-center gap-2"
        >
          {summaryLoading ? '🤖 Génération...' : `🤖 Générer résumés (${articlesWithoutSummary.length})`}
        </button>

        <button
          onClick={clearAllArticles}
          disabled={clearLoading || articles.length === 0}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 transition-all duration-200 flex items-center gap-2"
        >
          {clearLoading ? '🗑️ Suppression...' : '🗑️ Vider la base'}
        </button>
      </div>

      {/* Dashboard des statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="text-3xl font-bold">{articles.length}</div>
          <div className="text-blue-100">Total articles</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="text-3xl font-bold">{articlesWithSummary.length}</div>
          <div className="text-green-100">Avec résumés IA</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
          <div className="text-3xl font-bold">{articlesWithoutSummary.length}</div>
          <div className="text-orange-100">Sans résumés</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="text-3xl font-bold">{Math.round((articlesWithSummary.length / (articles.length || 1)) * 100)}%</div>
          <div className="text-purple-100">Taux résumés</div>
        </div>
      </div>

      {/* Message de statut avec animation */}
      {message && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg animate-pulse">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-ping"></div>
            <p className="text-blue-800 font-medium">{message}</p>
          </div>
        </div>
      )}

      {/* Liste des articles améliorée */}
      <div className="space-y-4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={article.id}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-gray-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors flex-1 mr-4 line-clamp-2"
                >
                  {article.title}
                </a>
                <div className="flex gap-3 items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    article.source === 'hackernews'
                      ? 'bg-orange-100 text-orange-800'
                      : article.source === 'reddit'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {article.source === 'hackernews' ? '🟠 HN' :
                     article.source === 'reddit' ? '🔴 Reddit' : '🇫🇷 FR'}
                  </span>

                  {article.score && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ {article.score}
                    </span>
                  )}

                  {!article.summary && (
                    <button
                      onClick={() => generateSingleSummary(article.id)}
                      disabled={singleSummaryLoading === article.id}
                      className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font-medium disabled:opacity-50 transition-colors"
                    >
                      {singleSummaryLoading === article.id ? '🤖...' : '🤖 Résumer'}
                    </button>
                  )}
                </div>
              </div>

              {/* Résumé IA avec style amélioré */}
              {article.summary && (
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-400 p-4 mt-4 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 font-medium text-sm">🤖 Résumé IA</span>
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-500 text-xs">Généré automatiquement</span>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">{article.summary}</p>
                </div>
              )}

              <div className="text-gray-500 text-sm mt-3 flex items-center gap-2">
                <span>📅</span>
                {new Date(article.created_at).toLocaleString('fr-FR')}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
            <div className="text-6xl mb-4">📰</div>
            <p className="text-lg">Aucun article trouvé.</p>
            <p>Utilisez les boutons ci-dessus pour charger des articles.</p>
          </div>
        )}
      </div>
    </div>
  );
}
