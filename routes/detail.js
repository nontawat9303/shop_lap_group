const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/detail', (req, res, next) => {
  const id = req.query.product_id;
  const products = adminData.products.find(o => o.product_id === id);
  console.log(products)
  res.render('detail', {
    prods: products,
    pageTitle: 'detail',
    path: '/',
    activeShop: true,
    productCSS: true
  });
});


module.exports = router;
