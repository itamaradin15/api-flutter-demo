const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const products = [
  {
    id: 1,
    name: "Almendra Cubierta en Chocolate - Gozana",
    brand: "Gozana",
    weight: "12 gr",
    price: 15.00,
    originalPrice: 19.00,
    onSale: true,
    image: "almendra-cubierta.png"
  },
  {
    id: 2,
    name: "Garbanzos Horneados Ajo y Cebolla - Gozana",
    brand: "Gozana Snacks",
    weight: "90 gr",
    price: 11.00,
    onSale: false,
    image: "garbanzos.jpeg"
  },
  {
    id: 3,
    name: "Protein Pancake Lucuma",
    brand: "Amaru Superfoods",
    weight: "350g",
    price: 39.00,
    onSale: false,
    image: "protein_pancake.png"
  },
  {
    id: 4,
    name: "Cereal snack orgánico con maca",
    brand: "Healthy Superfoods",
    weight: "300 gr",
    price: 18.50,
    onSale: false,
    image: "organic-flake.png"
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});