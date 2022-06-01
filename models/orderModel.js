const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema(
  {
    order: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
          required: [true, 'Order can not be empty!'],
        },
        price: {
          type: Number,
          required: [true, 'Please Include the product price'],
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    userInfo: {
      name: {
        type: String,
        required: [true, 'Please provide your name!'],
      },
      email: {
        type: String,
        required: [true, 'Please provide your email!'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid your email!'],
      },
      phoneNumber: {
        type: Number,
        required: [true, 'Please provide your phone Number  !'],
        lowercase: true,
        maxlength: [8, 'A phone Number  must be equal to 8 characters'],
        minlength: [8, 'A phone Number  must be equal to 8 characters'],
      },
    },
    shippingAddress: {
      country: {
        type: String,
        required: [true, 'Please provide complite address'],
      },
      street: {
        type: String,
        required: [true, 'Please provide complite address'],
      },
      city: {
        type: String,
        required: [true, 'Please provide complite address'],
      },
      postalCode: {
        type: String,
        required: [true, 'Please provide complite address'],
      },
    },
    shippingCost: {
      type: Number,
      required: [true, 'Please Include the product price'],
    },
    paid: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'In progress', 'Completed', 'Canceled'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

orderSchema.virtual('total').get(function () {
  const prices = this.order.map((obj) => obj.price);
  return this.shippingCost + prices.reduce((prev, curr) => prev + curr);
});

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'order.product',
    select: '-__v -Published -quantity -IsFeatured -price -priceDiscount',
  });
  next();
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
