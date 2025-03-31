const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Product', ProductSchema);
