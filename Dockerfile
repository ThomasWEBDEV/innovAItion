# Dockerfile pour Next.js avec TypeScript
FROM node:20

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande par défaut pour le développement
CMD ["npm", "run", "dev"]
