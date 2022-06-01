const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: [true, 'A product name must be unique '],
      trim: true,
      lowercase: true,
      maxlength: [
        40,
        'A product name must have less or equal then 40 characters',
      ],
      minlength: [
        10,
        'A product name must have more or equal then 10 characters',
      ],
    },
    slug: String,
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return Number(val) <= Number(this.price);
        },
        message: 'Discount price ({VALUE}) should be below the regular price',
      },
    },
    description: {
      type: Object,
    },
    imageCover: {
      type: String,
      required: [true, 'A product must have a cover image'],
    },
    images: [String],
    SKU: {
      type: String,
      unique: [true, 'A product SKU must be unique '],
    },
    published: {
      type: Boolean,
      default: true,
    },
    Tags: {
      type: [String],
      required: [true, 'A product must have Tags'],
    },
    quantity: {
      type: Number,
      required: [true, 'A product must have quantity'],
    },
    IsFeatured: {
      type: Boolean,
      default: false,
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: 'Brand',
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: false,
    },
    attributes: [
      {
        attributeName: {
          type: String,
          required: [true, 'Attribute Name can not be empty!'],
          trim: true,
        },

        attributeValue: {
          type: String,
          required: [true, 'Attribute Value can not be empty!'],
          trim: true,
        },
      },
    ],
  },
  {
    // Options
    timestamps: true,
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, trim: true });
    return next();
  }

  next();
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category subCategory brand',
    select: '-__v',
  });

  next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
