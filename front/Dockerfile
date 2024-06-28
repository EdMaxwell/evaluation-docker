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

# Générer le fichier de routage de TanStack Router
RUN npx @tanstack/router-cli generate

# Construire l'application
RUN npm run build

# Installer serve pour servir l'application
RUN npm install -g serve

# Exposer le port de l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["serve", "-s", "dist"]
