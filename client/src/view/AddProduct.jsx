import React from 'react';
import ProductForm from '../components/ProductForm';

const AddProduct = () => {
  const product = {
    name: 'product Name',
    price: 20,
    priceDiscount: 10,
    SKU: 20,
    Published: true,
    IsFeatured: true,
    Tags: ['tag1', 'tag3', 'tag2'],
    quantity: 10,
    attributes: [{ attributeName: 'cpu', attributeValue: 'i5' }],
  };
  return (
    <main className="card">
      <div className="card-body">
        <ProductForm product={product} />
      </div>
    </main>
  );
};

export default AddProduct;
