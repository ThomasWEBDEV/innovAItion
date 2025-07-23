'use client';

import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  url: string;
  score?: number;
  source: string;
  created_at: string;
  summary?: string;
}

export default function SimpleTest() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [singleSummaryLoading, setSingleSummaryLoading] = useState<string | null>(null);
  const [clearLoading, setClearLoading] = useState(false);

  // Stats calculées automatiquement
  const stats = {
    total: articles.length,
    withSummary: articles.filter(a => a.summary && a.summary.trim() !== "").length,
    withoutSummary: articles.filter(a => !a.summary || a.summary.trim() === "").length
  };
  const [message, setMessage] = useState('');

  const fetchAllArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/all-articles');
      const data = await response.json();
      setArticles(data.articles || []);
      setMessage(`DATA SYNC COMPLETE: ${data.articles?.length || 0} nodes loaded`);
    } catch (error) {
      setMessage('❌ Erreur chargement articles');
      console.error('Erreur:', error);
    }
    setLoading(false);
  };

  const fetchHackerNews = async () => {
    setLoading(true);
    setMessage('🔥 Récupération HackerNews...');
    try {
      const response = await fetch('/api/fetch-hackernews', { method: 'POST' });
      const data = await response.json();
      setMessage(`✅ ${data.count} articles HackerNews ajoutés`);
      await fetchAllArticles();
    } catch (error) {
      setMessage('❌ Erreur HackerNews');
      console.error('Erreur:', error);
    }
    setLoading(false);
  };

  const fetchFrenchSources = async () => {
    setLoading(true);
    setMessage('🇫🇷 Récupération sources françaises fiables...');
    try {
      const response = await fetch('/api/fetch-reliable-french', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.count} articles français fiables ajoutés`);
        await fetchAllArticles();
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Erreur sources françaises fiables');
      console.error('Erreur:', error);
    }
    setLoading(false);
  };

  const generateSummaries = async () => {
    setSummaryLoading(true);
    setMessage('AI PROCESSING INITIATED...');
    try {
      const response = await fetch('/api/generate-summaries', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.successCount} résumés générés avec succès`);
        await fetchAllArticles(); // Recharger pour afficher les résumés
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
        setMessage(`✅ Résumé généré pour l'article`);
        await fetchAllArticles(); // Recharger pour afficher le résumé
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
    if (!confirm('Êtes-vous sûr de vouloir supprimer TOUS les articles ?')) return;

    setClearLoading(true);
    setMessage('🗑️ Suppression de tous les articles...');
    try {
      const response = await fetch('/api/clear-articles', { method: 'DELETE' });
      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Tous les articles supprimés');
        setArticles([]);
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Erreur suppression');
      console.error('Erreur:', error);
    }
    setClearLoading(false);
  };

  useEffect(() => {
    fetchAllArticles();
  }, []);

  const articlesWithSummary = articles.filter(a => a.summary);
  const articlesWithoutSummary = articles.filter(a => !a.summary);

  return (
    <div className="container mx-auto p-6 max-w-6xl">

        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-gray-600">DATA NODES</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.withSummary}</div>
            <div className="text-sm text-gray-600">AI PROCESSED</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.withoutSummary}</div>
            <div className="text-sm text-gray-600">RAW DATA</div>
          </div>
        </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight mb-6">
          InnovAItion Neural Feed
        </h1>

        {/* Boutons de contrôle */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <button
            onClick={fetchHackerNews}
            disabled={loading}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-xl text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50 transition-colors"
          >
            HACKER PULSE
          </button>

          <button
            onClick={fetchFrenchSources}
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50 transition-colors"
          >
            NEURAL SOURCES
          </button>

          <button
            onClick={fetchAllArticles}
            disabled={loading}
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 shadow-lg hover:shadow-xl text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50 transition-colors"
          >
            SYNC DATA
          </button>

          <button
            onClick={generateSummaries}
            disabled={summaryLoading || articlesWithoutSummary.length === 0}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50 transition-colors"
          >
            {summaryLoading ? 'AI PROCESSING...' : `PROCESS AI BATCH (${articlesWithoutSummary.length})`}
          </button>

          <button
            onClick={clearAllArticles}
            disabled={clearLoading || articles.length === 0}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50 transition-colors"
          >
            {clearLoading ? '🗑️ Suppression...' : '🗑️ Vider la base'}
          </button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{articles.length}</div>
            <div className="text-blue-600">DATA NODES</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{articlesWithSummary.length}</div>
            <div className="text-green-600">AI PROCESSED</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{articlesWithoutSummary.length}</div>
            <div className="text-orange-600">RAW DATA</div>
          </div>
        </div>

        {/* Message de statut */}
        {message && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-700 font-medium">{message}</p>
          </div>
        )}

        {/* Liste des articles */}
        <div className="space-y-4">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div key={article.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg  transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors flex-1 mr-4 truncate break-words overflow-hidden"
                  >
                    {article.title}
                  </a>
                  <div className="flex gap-2 items-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      article.source === 'hackernews'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {article.source === 'hackernews' ? '🔥 HN' : '🇫🇷 FR'}
                    </span>
                    {article.score && (
                      <span className="text-gray-500 text-sm">⭐ {article.score}</span>
                    )}
                    {!article.summary && (
                      <button
                        onClick={() => generateSingleSummary(article.id)}
                        disabled={singleSummaryLoading === article.id}
                        title="Générer un résumé IA de cet article"
                        className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium disabled:opacity-50 transition-colors  transform"
                      >
                        {singleSummaryLoading === article.id ? 'PROC' : '🤖 AI ANALYZE'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Résumé IA */}
                {article.summary && (
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-3 mt-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-purple-600 font-medium text-sm">AI ANALYSIS</span>
                    </div>
                    <p className="text-gray-700 italic">{article.summary}</p>
                  </div>
                )}

                <div className="text-gray-500 text-sm mt-2">
                  {new Date(article.created_at).toLocaleString('fr-FR')}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Aucun article trouvé. Utilisez les boutons ci-dessus pour charger des articles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
