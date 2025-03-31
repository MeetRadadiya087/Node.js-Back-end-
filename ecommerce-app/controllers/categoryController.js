const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  category.save().then(() => {
    res.redirect('/categories');
  });
};

exports.getAllCategories = async (req, res) => {
  Category.find().then(categories => {
    res.render('categoryList', { categories });
  });
};
