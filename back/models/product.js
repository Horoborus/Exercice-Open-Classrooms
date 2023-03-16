const mongoose = require('mongoose');

// Définition du schéma de données pour les produits

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
  });
  

// Création du modèle de données pour les produits
module.exports = mongoose.model('product', productSchema);