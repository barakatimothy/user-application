const express = require('express');
const router = express.Router();

const phoneCaseData = [
  {
    _id: 2001,
    title: 'iPhone 15 Case',
    price: 29.99,
    previousPrice: 39.99,
    description: 'A sleek and durable case designed to protect your iPhone 15 from scratches and drops.',
    category: 'phone case',
    image: 'https://example.com/iphone15-case.jpg', // Replace with valid image URL
    isNew: true,
    brand: 'OtterBox',
    compatibleWith: 'iPhone 15',
    material: 'Polycarbonate',
    color: 'Black'
  },
  {
    _id: 2002,
    title: 'iPhone 15 Case',
    price: 19.99,
    previousPrice: 24.99,
    description: 'A stylish phone case with a slim profile, offering protection without adding bulk.',
    category: 'phone case',
    image: 'https://example.com/iphone15-case.jpg', // Replace with valid image URL
    isNew: true,
    brand: 'Spigen',
    compatibleWith: 'iPhone 15',
    material: 'Silicone',
    color: 'Blue'
  },
  {
    _id: 2003,
    title: 'iPhone 15 Case',
    price: 35.99,
    previousPrice: 45.99,
    description: 'A rugged, shockproof case designed for maximum protection in extreme conditions.',
    category: 'phone case',
    image: 'https://example.com/iphone15-case.jpg', // Replace with valid image URL
    isNew: true,
    brand: 'LifeProof',
    compatibleWith: 'iPhone 15',
    material: 'Rubber, Plastic',
    color: 'Green'
  }
];

// Route to get all phone cases
router.get('/', (req, res) => {
  res.json(phoneCaseData);
});

// Route to get a single phone case by ID
router.get('/:id', (req, res) => {
  const phoneCaseId = parseInt(req.params.id, 10);
  const singleCase = phoneCaseData.find(item => item._id === phoneCaseId);

  if (!singleCase) {
    return res.status(404).json({ message: "Phone case not found" });
  }

  res.json(singleCase);
});

module.exports = router;
