const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/detail', (req, res, next) => {
  const products = adminData.products;
  res.render('detail', {
    prods: products,
    pageTitle: 'detail',
    path: '/admin/detail',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
