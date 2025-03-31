const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category, user: req.user.id });
  product.save().then(() => {
    res.redirect('/products');
  });
};

exports.getAllProducts = async (req, res) => {
  Product.find().populate('category').then(products => {
    res.render('productList', { products });
  });
};

exports.getMyProducts = async (req, res) => {
  Product.find({ user: req.user.id }).populate('category').then(products => {
    res.render('myProducts', { products });
  });
};
