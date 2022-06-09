const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Category name is required'],
    trim: true,
    lowercase: true,
    // unique: [true, 'A Category name must be unique'],
  },

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  },
});

categorySchema.pre(/^find/, function (next) {
  this.populate({
    path: 'parent',
  });
  next();
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
