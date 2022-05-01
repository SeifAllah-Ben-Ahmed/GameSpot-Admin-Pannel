const mongoose = require('mongoose');

const attributeSchema = mongoose.Schema({
  key: {
    type: String,
    required: [true, 'Key can not be empty!'],
    unique: [true, 'Attribute key most be unique!'],
    trim: true,
    lowercase: true,
  },

  value: {
    type: [{ type: String, trim: true }],
    required: [true, 'Value can not be empty!'],
    trim: true,
    lowercase: true,
  },
});

const Attribute = mongoose.model('Attribute', attributeSchema);

module.exports = Attribute;
