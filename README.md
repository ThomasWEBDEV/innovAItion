# InnovAItion — Agregateur d'Actualites Tech avec Resumes IA

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-412991?logo=openai)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)

Plateforme d'agregation d'actualites technologiques alimentee par l'intelligence artificielle generative. Les articles provenant de HackerNews sont automatiquement collectes, stockes et resumes en francais via OpenAI GPT-3.5-turbo.

---

## Contexte

Projet developpe dans le cadre d'un portfolio de developpeur Full-Stack, concu pour demontrer des competences concretes en :

- Architecture d'applications web modernes avec Next.js 15 et TypeScript
- Integration d'APIs tierces (HackerNews, OpenAI)
- Gestion de base de donnees relationnelle avec Supabase (PostgreSQL)
- Containerisation avec Docker
- Design d'interfaces premium avec TailwindCSS et animations
- Deploiement production sur Vercel

---

## Pourquoi ce projet ?

Les recruteurs et clients cherchent des profils capables de :

- Integrer des APIs d'intelligence artificielle dans des applications reelles
- Concevoir une architecture backend scalable avec gestion d'etat en base de donnees
- Produire des interfaces utilisateur soignees et responsives
- Containeriser et deployer une application full-stack
- Travailler en autonomie sur un MVP complet en delai contraint

Ce projet repond a ces cinq points avec un livrable fonctionnel, documente et deploye.

---

## Ce que vous trouverez ici

- Pipeline complet d'agregation d'articles depuis l'API HackerNews
- Generation automatique de resumes en francais via OpenAI GPT-3.5-turbo
- Interface premium dark mode avec animations glassmorphism
- Recherche en temps reel cote client
- API REST interne avec gestion des erreurs
- Base de donnees PostgreSQL geree via Supabase
- Configuration Docker pour developpement local
- Documentation technique complete et reproductible

---

## Architecture

```
+-------------------------------------------------------+
|                   CLIENT (Navigateur)                 |
|                                                       |
|   page.tsx                SimpleTest.tsx              |
|   (Homepage + Nav)        (Interface articles)        |
|           |                        |                  |
|           +------------------------+                  |
|                        |                              |
+------------------------|------------------------------+
                         |
                         | HTTP (fetch)
                         |
+------------------------|------------------------------+
|              NEXT.JS SERVER (API Routes)              |
|                                                       |
|   /api/fetch-hackernews    POST  Fetche et stocke     |
|   /api/all-articles        GET   Liste tous articles  |
|   /api/generate-summaries  POST  Batch resumes IA     |
|   /api/generate-single-summary POST  Resume unitaire  |
|   /api/fetch-reliable-french POST  Sources statiques  |
|   /api/clear-articles      DELETE Vide la base        |
|   /api/reset-articles      DELETE Alternative reset   |
|                                                       |
|   src/services/hackernews.ts   (logique metier)       |
|   src/services/openai.ts       (appels GPT)           |
|   src/lib/supabase.ts          (client DB)            |
+------------------------|------------------------------+
                         |
          +--------------+----------------+
          |                               |
          v                               v
+-----------------+           +---------------------+
|  Supabase       |           |  OpenAI API         |
|  (PostgreSQL)   |           |  gpt-3.5-turbo      |
|                 |           |                     |
|  table articles |           |  /v1/chat/completions|
|  - id (uuid)    |           |  max_tokens: 200    |
|  - title        |           |  temperature: 0.3   |
|  - url          |           |                     |
|  - summary      |           +---------------------+
|  - source       |
|  - score        |           +---------------------+
|  - created_at   |           |  HackerNews API     |
|  - processed    |           |  (Firebase REST)    |
+-----------------+           |                     |
                              |  /topstories.json   |
                              |  /item/{id}.json    |
                              +---------------------+
```

### Justification des choix techniques

**Next.js 15 avec App Router**
Choix naturel pour une application full-stack TypeScript. L'App Router permet de cohabiter composants serveur et client dans la meme codebase, et les API Routes eliminent le besoin d'un backend separe pour ce scope de projet.

**Supabase plutot qu'une base auto-geree**
Supabase offre PostgreSQL heberge avec SDK JavaScript natif, authentification integree et 500 MB gratuits. Le setup prend 15 minutes contre plusieurs heures pour un PostgreSQL Docker configure manuellement avec gestion des backups.

**OpenAI GPT-3.5-turbo et non GPT-4**
Le modele GPT-3.5-turbo est suffisant pour des resumes factuels d'articles tech. Le cout est 20x inferieur a GPT-4, permettant de rester dans un budget de 5 euros pour 1000 resumes.

**Docker en developpement uniquement**
L'application tourne en conteneur en local. La production est deployee sur Vercel qui gere nativement Next.js sans configuration Docker supplementaire. Ce choix evite la complexite inutile d'une infrastructure conteneurisee en production pour un MVP.

---

## Fonctionnalites implementees

| Fonctionnalite                  | Statut | Description                                           |
|---------------------------------|--------|-------------------------------------------------------|
| Agregation HackerNews           | OK     | Top 30 articles via Firebase API officielle           |
| Stockage PostgreSQL             | OK     | Persistance via Supabase avec deduplication           |
| Resumes IA batch                | OK     | Generation sequentielle GPT-3.5 pour tous articles    |
| Resume unitaire par article     | OK     | Bouton par article pour generer a la demande          |
| Recherche client temps reel     | OK     | Filtrage sur titre, resume et source sans rechargement|
| Interface dark mode premium     | OK     | Design glassmorphism, animations CSS, responsive      |
| Dashboard statistiques          | OK     | Total articles, taux de resumage, articles en attente |
| Page About                      | OK     | Presentation du projet et de la stack                 |
| Page Contact                    | OK     | Formulaire et informations de contact                 |
| Reset base de donnees           | OK     | Suppression complete via API DELETE                   |
| Dockerisation                   | OK     | Dockerfile + docker-compose.yml fonctionnels          |

| Fonctionnalite                  | Statut | Note                                                  |
|---------------------------------|--------|-------------------------------------------------------|
| Authentification utilisateur    | Prevu  | Supabase Auth configure, UI non implementee           |
| Agregation Reddit               | Prevu  | API identifiee, non integree                          |
| Voice Search                    | Prevu  | Web Speech API, non implementee                       |
| PWA                             | Bonus  | Manifest basique disponible                           |

---

## Stack technologique

**Frontend**
- Next.js 15.3.5 — Framework React avec App Router et Server Components
- React 18.3.1 — Bibliotheque UI avec hooks
- TypeScript 5 — Typage statique sur toute la codebase
- TailwindCSS 3.4.4 — Utility-first CSS pour composants
- Framer Motion 11.11.1 — Animations declaratives
- Lucide React 0.263.1 — Bibliotheque d'icones SVG

**Backend**
- Next.js API Routes — Endpoints REST integres au framework
- OpenAI SDK 4.104.0 — Client officiel pour GPT-3.5-turbo

**Base de donnees**
- Supabase (PostgreSQL) — Base relationnelle avec SDK JavaScript
- @supabase/auth-helpers-nextjs 0.10.0 — Integration Auth Supabase pour Next.js
- @supabase/supabase-js 2.45.4 — Client Supabase universel

**Infrastructure**
- Docker + Docker Compose — Containerisation en developpement
- Vercel — Deploiement production avec CI/CD automatique sur push
- Node.js 20 slim — Image Docker de base

**Sources de donnees**
- HackerNews API (Firebase REST) — Articles tech anglophones
- OpenAI GPT-3.5-turbo — Generation de resumes en francais

**Outils de developpement**
- Yarn 1.22.22 — Gestionnaire de paquets
- ESLint + eslint-config-next — Linting
- PostCSS + Autoprefixer — Traitement CSS

---

## Structure du projet

```
innovaition/
|
|-- src/
|   |-- app/
|   |   |-- api/
|   |   |   |-- all-articles/
|   |   |   |   +-- route.ts          # GET  : liste tous les articles
|   |   |   |-- clear-articles/
|   |   |   |   +-- route.ts          # DELETE : vide la table articles
|   |   |   |-- fetch-hackernews/
|   |   |   |   +-- route.ts          # POST : fetch + save HN | GET : liste HN
|   |   |   |-- fetch-reliable-french/
|   |   |   |   +-- route.ts          # POST : insere sources statiques FR
|   |   |   |-- generate-single-summary/
|   |   |   |   +-- route.ts          # POST : resume IA pour 1 article
|   |   |   |-- generate-summaries/
|   |   |   |   +-- route.ts          # POST : resumes IA en batch
|   |   |   +-- reset-articles/
|   |   |       +-- route.ts          # DELETE : reset alternatif
|   |   |
|   |   |-- about/
|   |   |   +-- page.tsx              # Page presentation du projet
|   |   |-- contact/
|   |   |   +-- page.tsx              # Page contact avec formulaire
|   |   |-- globals.css               # Styles globaux + directives Tailwind
|   |   +-- layout.tsx                # Layout racine avec metadata et favicon
|   |   +-- page.tsx                  # Homepage : hero, features, actualites
|   |
|   |-- components/
|   |   |-- HackerNewsTest.tsx        # Composant de test API HackerNews (debug)
|   |   |-- SimpleTest.tsx            # Interface principale articles + actions
|   |   +-- SupabaseTest.tsx          # Composant de test connexion Supabase
|   |
|   |-- lib/
|   |   +-- supabase.ts               # Client Supabase + types + helpers auth
|   |
|   +-- services/
|       |-- hackernews.ts             # Service agregation HackerNews
|       |-- openai.ts                 # Service generation resumes GPT
|       +-- reliableFrenchSources.ts  # Sources statiques tech francophones
|
|-- public/
|   +-- favicon.ico
|
|-- Dockerfile                        # Image Node 20-slim pour conteneur
|-- docker-compose.yml                # Orchestration services dev
|-- next.config.js                    # Configuration Next.js
|-- tailwind.config.js                # Configuration TailwindCSS
|-- postcss.config.js                 # Configuration PostCSS
|-- tsconfig.json                     # Configuration TypeScript
|-- package.json                      # Dependances et scripts
|-- Procfile                          # Commande de demarrage (Heroku/Railway)
+-- .gitignore
```

---

## Prerequis

**Outils locaux requis**
- Node.js 20 ou superieur
- Yarn 1.22 ou superieur
- Docker et Docker Compose (optionnel, pour le mode conteneur)
- Git

**Comptes et services externes requis**
- Compte Supabase (gratuit) — https://supabase.com
- Cle API OpenAI — https://platform.openai.com
- Compte Vercel (optionnel, pour le deploiement) — https://vercel.com

---

## Installation et lancement

### Mode local sans Docker

```bash
# 1. Cloner le repository
git clone https://github.com/ThomasWEBDEV/innovaition.git
cd innovaition

# 2. Installer les dependances
yarn install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Editer .env.local avec vos cles (voir section Configuration)

# 4. Lancer le serveur de developpement
yarn dev

# L'application est accessible sur http://localhost:3000
```

### Mode Docker

```bash
# 1. Cloner le repository
git clone https://github.com/ThomasWEBDEV/innovaition.git
cd innovaition

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Editer .env.local avec vos cles

# 3. Construire et lancer le conteneur
docker-compose up --build

# L'application est accessible sur http://localhost:3000

# Pour arreter
docker-compose down
```

### Build de production

```bash
# Builder l'application
yarn build

# Lancer en mode production
yarn start
```

---

## Configuration des variables d'environnement

Creer un fichier `.env.local` a la racine du projet avec les variables suivantes :

```env
# Supabase — recuperer dans Settings > API de votre projet Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# OpenAI — recuperer sur https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-proj-...
```

Les variables prefixees `NEXT_PUBLIC_` sont exposees cote client. La variable `OPENAI_API_KEY` reste exclusivement cote serveur dans les API Routes.

---

## Configuration Supabase

### Creation de la table articles

Dans l'editeur SQL de votre projet Supabase, executer :

```sql
-- Creation de la table principale
CREATE TABLE articles (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,
  content     TEXT,
  summary     TEXT,
  url         TEXT NOT NULL,
  source      TEXT NOT NULL CHECK (source IN ('hackernews', 'reddit', 'lemonde', 'numerama', 'clubic')),
  source_id   TEXT,
  score       INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  processed   BOOLEAN DEFAULT FALSE
);

-- Index pour optimiser les requetes frequentes
CREATE INDEX idx_articles_source    ON articles(source);
CREATE INDEX idx_articles_score     ON articles(score DESC);
CREATE INDEX idx_articles_created   ON articles(created_at DESC);
CREATE INDEX idx_articles_processed ON articles(processed);
```

### Politique de securite (Row Level Security)

```sql
-- Activer RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Permettre toutes les operations pour le MVP
CREATE POLICY "Allow all operations" ON articles
  FOR ALL USING (true) WITH CHECK (true);
```

---

## API Reference

Tous les endpoints sont des Next.js Route Handlers situes dans `src/app/api/`.

### GET /api/all-articles

Retourne tous les articles de la base de donnees, tries par score decroissant, limite a 50.

```json
{
  "success": true,
  "count": 42,
  "articles": [
    {
      "id": "uuid",
      "title": "Titre de l'article",
      "url": "https://...",
      "source": "hackernews",
      "score": 312,
      "summary": "Resume genere par IA...",
      "created_at": "2026-02-13T10:00:00Z",
      "processed": true
    }
  ]
}
```

### POST /api/fetch-hackernews

Declenche la recuperation des 30 meilleurs articles HackerNews. Filtre les articles sans URL et avec un score inferieur a 5 points.

```json
{
  "success": true,
  "message": "18 articles HackerNews récupérés et sauvegardés",
  "count": 18
}
```

### GET /api/fetch-hackernews

Retourne les 20 articles HackerNews stockes en base, tries par score.

### POST /api/generate-summaries

Recupere tous les articles sans resume et lance la generation via OpenAI. Traitement sequentiel avec pause de 200 ms entre chaque appel.

```json
{
  "message": "Résumés générés avec succès",
  "totalProcessed": 18,
  "successCount": 17,
  "errorCount": 1
}
```

### POST /api/generate-single-summary

Genere le resume d'un article specifique par son ID.

Corps de la requete :
```json
{ "articleId": "uuid-de-l-article" }
```

Reponse :
```json
{
  "message": "Résumé généré avec succès",
  "summary": "Texte du résumé...",
  "articleId": "uuid"
}
```

### POST /api/fetch-reliable-french

Insere une liste statique de 15 ressources tech reconnues pour enrichir le contenu de demonstration.

### DELETE /api/clear-articles

Supprime tous les enregistrements de la table articles.

```json
{ "message": "Tous les articles ont été supprimés", "success": true }
```

---

## Services et logique metier

### src/services/hackernews.ts — HackerNewsService

Classe responsable de l'ensemble du pipeline HackerNews.

| Methode                      | Description                                              |
|------------------------------|----------------------------------------------------------|
| `getTopStoryIds()`           | Recupere les 30 IDs des top stories via Firebase REST    |
| `getItem(id)`                | Recupere le detail d'un article par son ID               |
| `filterValidArticles(items)` | Filtre : type story, URL presente, score superieur a 5   |
| `saveArticlesToDB(articles)` | Insere en masse dans Supabase via `.insert()`            |
| `fetchAndSaveArticles()`     | Methode principale orchestrant tout le pipeline          |
| `getArticlesFromDB()`        | Requete Supabase pour lister les articles HN stockes     |

**Logique de filtrage**

```typescript
// Un article est valide si :
item.type === 'story'     // C'est un article et non un commentaire
item.url !== undefined    // Il possede une URL externe (pas de posts Ask HN)
item.title !== undefined  // Il possede un titre
item.score >= 5           // Score minimum pour filtrer le bruit
```

**Note sur les doublons** : La methode utilise `.insert()` et non `.upsert()`. Pour eviter les doublons en cas d'appels multiples, ajouter une contrainte UNIQUE sur la colonne `source_id` en base.

---

### src/services/openai.ts — Service GPT

Deux fonctions exportees pour la generation de resumes.

**generateSummary(article)**

Appel unitaire a GPT-3.5-turbo. Parametres : `max_tokens: 200`, `temperature: 0.3`.

La temperature basse favorise des resumes factuels et deterministes.

Prompt utilise :
```
Résume cet article tech en 2-3 phrases concises et informatives.
Concentre-toi sur : l'information principale, l'impact tech/business,
les points clés à retenir. Réponse en français, maximum 150 mots.
```

**generateBatchSummaries(articles)**

Boucle sequentielle avec pause de 200 ms entre chaque appel. Le traitement sequentiel respecte les rate limits OpenAI et permet de controler le cout total de facon predictible.

---

### src/services/reliableFrenchSources.ts — ReliableFrenchSourcesService

Service qui insere une liste statique de 15 ressources tech reconnues (documentation officielle, plateformes de recherche, outils developpeur). Ces articles servent de contenu de demonstration avant que le pipeline HackerNews ne soit charge.

Sources incluses : OpenAI Platform, Hugging Face Hub, GitHub meta-llama, Anthropic Docs, Google AI Blog, Papers With Code, TensorFlow Hub, PyTorch Tutorials, Kaggle Learn, Towards Data Science, NVIDIA Developer.

---

### src/lib/supabase.ts — Client Supabase

Configure le client Supabase via `createClientComponentClient`.

**Type Article**

```typescript
export type Article = {
  id: string
  title: string
  content?: string
  summary?: string
  url: string
  source: 'hackernews' | 'reddit'
  source_id?: string
  score: number
  created_at: string
  processed: boolean
}
```

**Helpers d'authentification prepares pour integration future**

```typescript
signInWithEmail(email, password)   // Connexion email/mot de passe
signUpWithEmail(email, password)   // Inscription
signOut()                          // Deconnexion
```

---

## Composants frontend

### src/components/SimpleTest.tsx — Interface principale

Composant central de l'application. Gere l'affichage des articles et toutes les interactions utilisateur.

**Etat local**

| State                   | Type            | Description                                      |
|-------------------------|-----------------|--------------------------------------------------|
| `articles`              | `Article[]`     | Liste complete chargee depuis la DB              |
| `filteredArticles`      | `Article[]`     | Liste apres application du filtre recherche      |
| `loading`               | `boolean`       | Indicateur de chargement global                  |
| `summaryLoading`        | `boolean`       | Indicateur de generation batch en cours          |
| `singleSummaryLoading`  | `string | null` | ID de l'article en cours de resumage unitaire    |
| `clearLoading`          | `boolean`       | Indicateur de suppression en cours               |
| `message`               | `string`        | Message de statut affiche a l'utilisateur        |
| `searchQuery`           | `string`        | Requete de recherche en cours                    |

**Fonctionnalites**

- Recherche en temps reel sur titre, resume et source (filtrage cote client, sans appel API)
- Dashboard statistique : total articles, avec resume, sans resume, taux de resumage en pourcentage
- Badge de couleur par source : orange HackerNews, rouge Reddit, bleu sources francaises
- Bouton de resume unitaire affiche uniquement sur les articles sans resume
- Confirmation native du navigateur avant suppression complete de la base

**Synchronisation de l'affichage filtres**

```typescript
useEffect(() => {
  handleSearch(searchQuery);
}, [articles]);
// Resynchronise les articles filtres a chaque modification de la liste complete
```

---

### src/components/SupabaseTest.tsx — Test de connexion

Composant de diagnostic qui verifie la connexion a Supabase en tentant un `SELECT count` sur la table articles. Affiche un bandeau vert ou rouge selon le resultat. Utilise en phase de developpement.

---

### src/components/HackerNewsTest.tsx — Interface de test HN

Interface alternative de test pour l'API HackerNews avec boutons de fetch separees. Conserve pour debogage et comparaison avec l'interface principale.

---

## Pages de l'application

### src/app/page.tsx — Homepage

Page d'accueil composee de six sections :

1. **Navigation fixe** — Logo, liens Accueil, Actualites, A propos, Contact. Glassmorphism avec `backdrop-filter: blur(20px)` et bordure inferieure translucide.

2. **Hero section** — Pleine hauteur viewport. Titre avec gradient CSS anime, sous-titre, deux boutons CTA. Effets de fond : radial gradients animes et grille CSS avec effet matrix (`animation: matrix-move 20s linear infinite`).

3. **Features section** — Trois cards presentant les fonctionnalites cles : Temps Reel, IA Generative, Personnalisation. Chaque card possede une barre superieure en gradient bleu-violet et des effets hover avec translateY.

4. **Section Actualites** — Integre le composant `SimpleTest`. Ancre `#actualites` pour navigation directe depuis le bouton hero.

5. **Stats section** — Quatre metriques : Articles Analyses, Utilisateurs Actifs, Uptime, Monitoring.

6. **Footer** — Copyright, liens sociaux GitHub et LinkedIn.

Animations CSS en `<style jsx>` : `pulse`, `matrix-move`, `glow`, `fadeInUp`.

---

### src/app/about/page.tsx — Page A propos

Page statique de presentation avec quatre blocs : mission et proposition de valeur, stack technique detaillee, profil du developpeur avec liens sociaux, metriques de la plateforme.

---

### src/app/contact/page.tsx — Page Contact

Deux colonnes : informations de contact et formulaire. La colonne gauche liste les coordonnees (email, telephone, localisation), les liens sociaux et les types de collaborations recherchees. La colonne droite contient un formulaire avec champs nom, email, type de projet, description et bouton de soumission. Section FAQ en bas de page.

---

## Docker

### Dockerfile

```dockerfile
FROM node:20-slim
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["node_modules/.bin/next", "dev"]
```

L'option `--frozen-lockfile` garantit la reproductibilite des builds en utilisant exactement les versions du `yarn.lock`.

### docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
```

Le volume `/app/node_modules` est isole du montage principal pour eviter les conflits de compatibilite entre les `node_modules` de l'hote et ceux du conteneur (probleme classique sur Windows et macOS).

---

## Deploiement

### Vercel (recommande)

```bash
# Installer la CLI Vercel
npm i -g vercel

# Premier deploiement
vercel

# Deploiement production
vercel --prod
```

Configurer dans Vercel Dashboard > Settings > Environment Variables :
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`

### Railway ou Render

Le `Procfile` a la racine configure la commande de demarrage :

```
web: yarn start
```

Le script `start` dans `package.json` utilise `next start -p $PORT` pour supporter la variable de port dynamique des plateformes PaaS.

---

## Budget infrastructure

| Service   | Usage                        | Cout mensuel |
|-----------|------------------------------|--------------|
| Supabase  | 500 MB DB + 50k utilisateurs | 0 EUR        |
| Vercel    | 100 GB bandwidth             | 0 EUR        |
| OpenAI    | 1000 resumes GPT-3.5-turbo   | 5 EUR max    |
| Total     |                              | 5 EUR max    |

---

## Resultats et metriques

Metriques observees sur un cycle de test complet :

| Metrique                        | Valeur            |
|---------------------------------|-------------------|
| Articles HackerNews par fetch   | 15 a 25           |
| Temps de fetch HackerNews       | 8 a 15 secondes   |
| Temps de generation resume IA   | 1 a 2 secondes    |
| Cout OpenAI pour 20 resumes     | environ 0.02 EUR  |
| Score Lighthouse Performance    | 85 et plus        |
| Temps de chargement initial     | inferieur a 2 s   |

---

## Roadmap

**Phase 2 — Authentification et personalisation**
- Integration complete Supabase Auth (connexion, inscription, profil)
- Sauvegarde d'articles par utilisateur
- Preferences de sources par compte

**Phase 3 — Sources supplementaires**
- Agregation Reddit via API officielle OAuth2
- Sources RSS francophones (LeMonde Tech, Numerama, Clubic)
- Pipeline de deduplication inter-sources

**Phase 4 — Recherche avancee**
- Recherche full-text PostgreSQL avec `ts_vector` et `ts_query`
- Embeddings OpenAI pour recherche semantique
- Filtres par source, date, score

**Phase 5 — WOW Factor**
- Voice Search via Web Speech API avec retour visuel waveform
- Mode Terminal avec interface cyberpunk et commandes textuelles
- Notifications push via Service Workers

---

## Auteur

Thomas Feret
Developpeur Full-Stack — Specialisation Next.js, TypeScript, IA

- GitHub : https://github.com/ThomasWEBDEV
- LinkedIn : https://www.linkedin.com/in/thomas-feret-dev/
- Email : thomas.feret@hotmail.fr
- Localisation : Rennes, Bretagne, France

Autres projets :
- ids-detection-lab — Systeme de detection d'intrusion Suricata + ELK Stack sur AWS

---

## Licence

MIT License — Libre utilisation a des fins educatives et professionnelles.

---

Note : Les statistiques affichees sur les pages About et Homepage (1M+ articles, 50K+ utilisateurs) sont des projections de l'objectif produit et non des chiffres reels de la plateforme actuelle dans sa version MVP.

Duree de developpement : 7 jours
Repository : https://github.com/ThomasWEBDEV/innovaition
