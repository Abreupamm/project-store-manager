const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => { });

router.get('/products/:id', (req, res) => { });

module.exports = router;