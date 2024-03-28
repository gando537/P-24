const path = require('path');

module.exports = {
  mode: 'development', // ou 'production'
  entry: './public/index.html', // Entrée principale de votre application
  output: {
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie où les fichiers générés seront placés
    filename: 'bundle.js' // Nom du fichier de sortie généré par Webpack
  },
  // Autres configurations de webpack, comme les loaders et les plugins, peuvent être ajoutées ici
  module: {
    rules: [
      {
        test: /\.html$/, // Appliquer le loader aux fichiers HTML
        use: 'html-loader' // Utiliser le loader html-loader
      }
    ]
  }
};
