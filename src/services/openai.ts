import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ArticleToSummarize {
  id: string;
  title: string;
  url: string;
  content?: string;
}

export async function generateSummary(article: ArticleToSummarize): Promise<string> {
  try {
    const prompt = `Résume cet article tech en 2-3 phrases concises et informatives :

Titre: ${article.title}
URL: ${article.url}

Concentre-toi sur :
- L'information principale
- L'impact tech/business
- Les points clés à retenir

Réponse en français, maximum 150 mots.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
      temperature: 0.3,
    });

    return completion.choices[0]?.message?.content?.trim() || "Résumé non disponible";
  } catch (error) {
    console.error('Erreur génération résumé:', error);
    return "Erreur lors de la génération du résumé";
  }
}

export async function generateBatchSummaries(articles: ArticleToSummarize[]): Promise<{id: string, summary: string}[]> {
  const results: {id: string, summary: string}[] = [];

  // Traitement séquentiel pour économiser et éviter rate limiting
  for (const article of articles) {
    const summary = await generateSummary(article);
    results.push({ id: article.id, summary });

    // Pause de 200ms entre chaque appel (économie + respect limites)
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  return results;
}
