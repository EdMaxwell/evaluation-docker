### README.md
# Evaluation Docker - TARTROU PIERRE

Ce projet consiste à dockeriser une application comprenant une API AdonisJS, un front-end React et une base de données PostgreSQL, avec une interface d'administration via Adminer.

## Contexte de l'application

Cette application a été développée pour découvrir AdonisJS 6 et TanStack Router. Pour l'évaluation, j'ai ajouté une page qui affiche un tableau avec la liste des comptes enregistrés sur l'application. Vous pouvez créer des comptes depuis le formulaire de connexion. PostgreSQL est utilisé pour la base de données, et Adminer est utilisé pour y accéder.

## Fonctionnalités de l'application
- Page de liste des utilisateurs : Une page qui affiche un tableau avec la liste des comptes enregistrés sur l'application.
- Formulaire de connexion : Vous pouvez créer des comptes via le lien qui se trouve avec le formulaire de connexion
## Prérequis

Assurez-vous d'avoir les logiciels suivants installés sur votre machine :

- Docker
- Docker Compose

## Configuration de l'environnement

1. Clonez le dépôt sur votre machine locale :

```sh
git clone https://github.com/EdMaxwell/evaluation-docker.git
cd evaluation-docker
```

2. Créez un fichier `.env` à la racine du projet avec les variables d'environnement nécessaires pour la base de données. Exemple :

```env
DB_USER=indi-admin
DB_PASSWORD=adminPassword
DB_DATABASE=indi-db
```

3. Créez un fichier `.env` dans le répertoire `api/` avec la configuration suivante :

```env
TZ=UTC
PORT=3333
HOST=0.0.0.0
LOG_LEVEL=info
APP_KEY=5acMxYKSgFB8_ziwscerHRJNI9z_graP
NODE_ENV=development
DB_CONNECTION=pg
DB_HOST=indi_postgres_db
DB_PORT=5432
DB_USER=indi-admin
DB_PASSWORD=adminPassword
DB_DATABASE=indi-db
SESSION_DRIVER=cookie
```

4. Créez un fichier `.env` dans le répertoire `front/` avec la configuration suivante :

```env
VITE_APP_API_URL=http://localhost:3333/api/v1
```

## Lancer le projet

Exécutez les commandes suivantes pour démarrer tous les services :

```sh
docker-compose down
docker-compose up --build
```

## Accès aux services

- **Front-end React** : [http://localhost:3000](http://localhost:3000)
- **API AdonisJS** : [http://localhost:3333/api/v1](http://localhost:3333/api/v1)
- **Adminer** : [http://localhost:8080](http://localhost:8080)

### Utilisation de Adminer

Pour accéder à la base de données via Adminer, utilisez les informations suivantes :

- **Serveur** : `indi_postgres_db`
- **Nom d'utilisateur** : `indi-admin`
- **Mot de passe** : `adminPassword`
- **Base de données** : `indi-db`

## Vérification et tests

- Ouvrez votre navigateur et accédez au front-end à l'adresse [http://localhost:3000](http://localhost:3000).
- Accédez à Adminer à l'adresse [http://localhost:8080](http://localhost:8080) pour gérer la base de données.

## Résolution des problèmes

- Assurez-vous que les variables d'environnement dans les fichiers `.env` sont correctement configurées et que les services sont connectés aux réseaux Docker internes.


