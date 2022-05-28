const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'Brand name can not be empty!'],
    unique: [true, 'Brand name most be unique!'],
    trim: true,
    lowercase: true,
  },

  logo: {
    type: String,
    required: [true, 'Brand logo can not be empty!'],
  },
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
