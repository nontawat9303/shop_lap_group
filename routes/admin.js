const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [{
  "product_id":"001",
  "product_name":"Tomato",
  "image_path":"https://img.taste.com.au/EktoNJnE/w720-h480-cfill-q80/taste/2017/06/hero-tomato-127749-1.jpg",
  "price":"10",
  "detail":"5555"
},{
  "product_id":"002",
  "product_name":"Carrot",
  "image_path":"https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg",
  "price":"25",
  "detail":"5555"
},{
  "product_id":"003",
  "product_name":"Pumpkin",
  "image_path":"https://solidstarts.com/wp-content/uploads/Pumpkin-for-Babies-480x320.jpg",
  "price":"149",
  "detail":"5555"
},{
  "product_id":"004",
  "product_name":"Onion",
  "image_path":"https://www.marhabaworld.com/wp-content/uploads/2020/12/Onion-Jumbo-2kg.-%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%88%E0%B8%B1%E0%B8%A1%E0%B9%82%E0%B8%9A%E0%B9%89-2%E0%B8%81%E0%B8%81..jpg",
  "price":"32",
  "detail":"5555"
},{
  "product_id":"005",
  "product_name":"Basil",
  "image_path":"https://i.pinimg.com/originals/bd/ac/e2/bdace2aab9f970572a4dd3449433bbd3.jpg",
  "price":"5",
  "detail":"5555"
},{
  "product_id":"006",
  "product_name":"Lemon",
  "image_path":"https://media.healthyfood.com/wp-content/uploads/2017/03/What-to-do-with-lemons.jpg",
  "price":"99",
  "detail":"5555"
},{
  "product_id":"007",
  "product_name":"Lime",
  "image_path":"http://2.bp.blogspot.com/-AJkXUuzMndQ/U05QPLrVGzI/AAAAAAAAAQ8/LLJ1DE9bHpg/s1600/lime.jpg  ",
  "price":"69",
  "detail":"5555"
},{
  "product_id":"008",
  "product_name":"Garlic",
  "image_path":"https://5.imimg.com/data5/HL/FE/MY-24461174/garlic-500x500.png",
  "price":"19",
  "detail":"5555"
},{
  "product_id":"009",
  "product_name":"Chilli",
  "image_path":"https://image.makewebeasy.net/makeweb/0/wOSa9mDAu/FreshVegetables/Red_Chilli.jpg",
  "price":"9",
  "detail":"5555"
},{
  "product_id":"010",
  "product_name":"Lemon Grass",
  "image_path":"https://image.makewebeasy.net/makeweb/0/wOSa9mDAu/FreshVegetables/Lemon_Grass.jpg",
  "price":"59",
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
