//Variables utilisées
const express = require('express');
const mongoose = require('mongoose');
let product = require('./models/product');

//creation de l'application express
const app = express();

//body-parser
app.use(express.json());

//Configuration CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://filipe:guoihrbF87@cluster0.wwad9u3.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Routes utilisées
//Route pour la récupération de tous les produits

app.get('/api/products', (req, res) => {
 const product = new product({
   ...req.body
 });
 product.save()
.then(() => res.status(201).json({ message: 'Objet créé !' }))
.catch(error => res.status(400).json({ error }));

});




module.exports = app;
