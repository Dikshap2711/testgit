const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('store', 'name');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, async (req, res) => {
  const { store, name, price, stock, category, image, description } = req.body;
  try {
    const product = await Product.create({
      store, name, price, stock, category, image, description
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;