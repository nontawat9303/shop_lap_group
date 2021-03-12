const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [{
  "product_id":"001",
  "product_name":"Tomato",
  "image_path":"https://fbconnect.co. th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/e/redberrytomato_1.jpg",
  "price":"10",
  "detail":"5555"
},{
  "product_id":"002",
  "product_name":"Carrot",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"003",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"004",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"005",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"006",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"007",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"008",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"009",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"010",
  "product_name":"maysa",
  "iamge_path":"",
  "price":"99",
  "detail":"5555"
}
];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ name: req.body.name , price: req.body.price , detail: req.body.detail , image_path: req.body.image_path});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
