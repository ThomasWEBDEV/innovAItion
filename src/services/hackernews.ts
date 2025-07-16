// src/services/hackernews.ts
import { supabase } from '@/lib/supabase'

export interface HackerNewsItem {
  id: number
  title: string
  url?: string
  score: number
  time: number
  type: string
  by: string
}

class HackerNewsService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0'

  // Récupère les top stories (IDs)
  async getTopStoryIds(): Promise<number[]> {
    try {
      const response = await fetch(`${this.baseUrl}/topstories.json`)
      const ids = await response.json()
      return ids.slice(0, 30) // 30 premiers articles
    } catch (error) {
      console.error('Erreur fetch top stories:', error)
      return []
    }
  }

  // Récupère un article par son ID
  async getItem(id: number): Promise<HackerNewsItem | null> {
    try {
      const response = await fetch(`${this.baseUrl}/item/${id}.json`)
      return await response.json()
    } catch (error) {
      console.error(`Erreur fetch item ${id}:`, error)
      return null
    }
  }

  // Filtre les articles avec URL (pas de comments)
  filterValidArticles(items: (HackerNewsItem | null)[]): HackerNewsItem[] {
    console.log('🔍 Items reçus:', items.length)
    console.log('📊 Échantillon items:', items.slice(0, 3))

    const filtered = items.filter((item): item is HackerNewsItem => {
      if (!item) {
        console.log('❌ Item null')
        return false
      }
      if (item.type !== 'story') {
        console.log('❌ Pas story:', item.type)
        return false
      }
      if (!item.url) {
        console.log('❌ Pas URL:', item.title)
        return false
      }
      if (!item.title) {
        console.log('❌ Pas title')
        return false
      }
      if (item.score < 5) { // Réduit le seuil à 5
        console.log('❌ Score trop bas:', item.score)
        return false
      }
      console.log('✅ Article valide:', item.title, `(${item.score} pts)`)
      return true
    })

    console.log(`📈 Résultat: ${filtered.length} articles valides sur ${items.length}`)
    return filtered
  }

  // Stocke les articles dans Supabase
  async saveArticlesToDB(articles: HackerNewsItem[]) {
    const articlesToInsert = articles.map(article => ({
      // Retire l'ID car Supabase va générer un UUID automatiquement
      title: article.title,
      url: article.url!,
      source: 'hackernews' as const,
      source_id: article.id.toString(), // Garde l'ID HN dans source_id
      score: article.score,
      created_at: new Date(article.time * 1000).toISOString(),
      processed: false
    }))

    try {
      const { data, error } = await supabase
        .from('articles')
        .insert(articlesToInsert) // Changé: .insert() au lieu de .upsert()
        .select()

      if (error) {
        console.error('Erreur sauvegarde DB:', error)
        return []
      }

      console.log(`✅ ${data?.length || 0} articles HN sauvegardés`)
      return data || []
    } catch (error) {
      console.error('Erreur DB:', error)
      return []
    }
  }

  // Fonction principale : fetch + save
  async fetchAndSaveArticles() {
    console.log('🔄 Début fetch HackerNews...')

    // 1. Récupère les IDs des top stories
    const topIds = await this.getTopStoryIds()
    if (topIds.length === 0) {
      console.log('❌ Aucun ID récupéré')
      return []
    }

    console.log(`📥 ${topIds.length} IDs récupérés`)

    // 2. Récupère les détails de chaque article
    const itemPromises = topIds.map(id => this.getItem(id))
    const items = await Promise.all(itemPromises)

    // 3. Filtre les articles valides
    const validArticles = this.filterValidArticles(items)
    console.log(`✅ ${validArticles.length} articles valides`)

    // 4. Sauvegarde en DB
    const savedArticles = await this.saveArticlesToDB(validArticles)

    console.log(`🎉 HackerNews terminé: ${savedArticles.length} articles`)
    return savedArticles
  }

  // Récupère les articles depuis la DB
  async getArticlesFromDB() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('source', 'hackernews')
        .order('score', { ascending: false })
        .limit(20)

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Erreur récupération articles:', error)
      return []
    }
  }
}

export const hackerNewsService = new HackerNewsService()
