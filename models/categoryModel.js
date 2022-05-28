const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: [true, 'A Category name must be unique'],
  },

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
