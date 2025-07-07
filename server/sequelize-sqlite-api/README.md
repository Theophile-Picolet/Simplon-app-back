# API Sequelize & SQLite

Ce projet est une API simple construite avec Express, Sequelize et SQLite. Il montre comment mettre en place une API RESTful avec des opérations CRUD de base.

## Structure du projet

```
sequelize-sqlite-api
├── src
│   ├── app.js               # Point d'entrée de l'application
│   ├── models
│   │   └── index.js         # Modèles Sequelize et connexion à la base de données
│   ├── routes
│   │   └── api.js           # Routes de l'API
│   └── controllers
│       └── apiController.js # Logique métier des routes de l'API
├── package.json             # Fichier de configuration npm
├── .sequelizerc             # Configuration de la CLI Sequelize
└── README.md                # Documentation du projet
```

## Installation

1. Clonez le dépôt :
   ```
   git clone https://github.com/Theophile-Picolet/Simplon-app-back.git
   cd sequelize-sqlite-api
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

## Utilisation

1. Démarrez l'application :
   ```
   npm start
   ```

2. L'API sera accessible sur `https://simplon-app-back.onrender.com/api/blagues`.

## Points de terminaison de l'API

- `GET /api/blagues` - Récupérer toutes les blagues
- `GET /api/blagues/:id` - Récupérer une blague spécifique par ID
- `POST /api/blagues` - Créer une nouvelle blague
- `GET /api/random-blague` - Récupérer une blague aléatoire

## Licence

Ce projet est sous licence MIT.