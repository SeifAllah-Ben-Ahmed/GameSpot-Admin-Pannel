import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'Must be at least 10 characters')
    .max(40, 'Must be 40 characters or less')
    .required('Product Name is Required'),
  price: Yup.number()
    .min(0, `Minimum price is $1`)
    .required('Price is Required'),
  priceDiscount: Yup.number()
    .default(0)
    .test({
      name: 'max',
      exclusive: false,
      params: {},
      message: 'Discount must be less than the regular price',
      test: function (value) {
        // You can access the price field with `this.parent`.
        return value === '' || value <= this.parent.price - 1;
      },
    }),
  description: Yup.object(),
  SKU: Yup.string().required('SKU is Required'),
  brand: Yup.string().required('brand is Required'),
  Published: Yup.boolean(),
  IsFeatured: Yup.boolean(),
  Tags: Yup.array()
    .required('Tags is Required')
    .min(3, 'must be at least 3 Tag'),
  quantity: Yup.number().required('Quantity is Required'),
  category: Yup.string().required('Category is Required'),
  attributes: Yup.array(
    Yup.object({
      attributeName: Yup.string().required('key is a Required field'),
      attributeValue: Yup.string().required('value is a Required field'),
    })
  ),
  images: Yup.array().required('Secondary Images is  Required ').max(5),
  imageCover: Yup.mixed().required('Principal Image is  Required '),
});

export const brandSchema = Yup.object().shape({
  brand: Yup.string().required('Brand Name is Required'),
  logo: Yup.string().required('Brand Logo is Required'),
});

export const attributeSchema = Yup.object().shape({
  key: Yup.string().required('Attributes Name is Required'),
  value: Yup.array().required('value is a Required field').min(2),
});
export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Category Name is Required'),
});
