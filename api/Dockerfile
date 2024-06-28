# Utiliser une image node comme base
FROM node:21.6.2

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 3333

# Exécuter les migrations puis démarrer l'application en mode développement
CMD ["sh", "-c", "node ace migration:run && npm run dev"]
