# Dockerfile pour Next.js avec TypeScript
# Utiliser une image Node.js plus légère pour réduire les vulnérabilités
FROM node:20-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
# Copie package.json et yarn.lock (si vous l'utilisez)
COPY package.json yarn.lock ./

# Installer les dépendances avec Yarn
# --frozen-lockfile est recommandé pour les builds Docker afin d'assurer la reproductibilité
RUN yarn install --frozen-lockfile

# Copier le code source
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande par défaut pour le développement
# Utiliser le format exec pour une meilleure gestion des signaux et appeler directement l'exécutable Next.js
CMD ["node_modules/.bin/next", "dev"]
