# Dockerfile

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

# Commande pour démarrer l'application
CMD ["node", "ace", "serve", "--watch"]
