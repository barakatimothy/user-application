const express = require('express');
const router = express.Router();

const phoneData = [
  {
    _id: 1001,
    title: 'iPhone 15',
    price: 1500.99,
    previousPrice: 1600.99,
    description: 'Lorem Ipsum has been the industrys standard dummy text',
    category: 'phone',
    image: 'https://example.com/iphone15.jpg', // Replace with valid image URL
    isNew: true,
    brand: 'Apple'
  },
  {
    _id: 1002,
    title: 'iPhone 15',
    price: 1500.99,
    previousPrice: 1600.99,
    description: 'Lorem Ipsum has been the industrys standard dummy text',
    category: 'phone',
    image: 'https://example.com/iphone15.jpg', // Replace with valid image URL
    isNew: true,
    brand: 'Apple'
  },
  {
    _id: 1003,
    title: 'iPhone 15',
    price: 1500.99,
    previousPrice: 1600.99,
    description: 'Lorem Ipsum has been the industrys standard dummy text',
    category: 'phone',
    image: 'https://example.com/iphone15.jpg', // Replace with valid image URL
    isNew: true,
    brand: 'Apple'
  }
];

// Route to get all phones
router.get('/', (req, res) => {
  res.json(phoneData);
});

// Single product route
router.get('/:id', (req, res) => {
  const phoneId = parseInt(req.params.id, 10);
  const singlePhone = phoneData.find(item => item._id === phoneId);

  if (!singlePhone) {
    return res.status(404).json({ message: "Phone not found" });
  }

  res.json(singlePhone);
});

module.exports = router;
