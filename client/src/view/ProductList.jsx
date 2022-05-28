import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteProduct, getProducts } from '../features/product/productApi';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  const handleDelete = async (slug) => {
    await dispatch(deleteProduct(slug));
    await dispatch(getProducts());
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <main className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive table-borderless">
            <thead className="text-center">
              <tr className="bg-light">
                <th scope="col" width="5%">
                  SKU
                </th>
                <th scope="col" width="25%">
                  Name
                </th>
                <th scope="col" width="10%">
                  Status
                </th>
                <th scope="col" className="text-end" width="20%">
                  Price
                </th>
                <th scope="col" className="text-end" width="15%">
                  Price Discount
                </th>
                <th scope="col" className="text-center" width="15%">
                  quantity
                </th>
                <th scope="col" className="text-end" width="10%">
                  <span>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => (
                  <tr className="text-center" key={item.SKU}>
                    <td>
                      <span
                        className="d-inline-block text-truncate "
                        style={{ width: '5rem' }}
                      >
                        {item.SKU}
                      </span>
                    </td>

                    <td className="text-start">
                      <img
                        src={`${process.env.REACT_APP_BACKEND}/products/${item.imageCover}`}
                        width="50"
                        alt={item.name}
                        className="me-2"
                      />
                      <span
                        className="d-inline-block text-truncate "
                        style={{ maxWidth: '13.5rem' }}
                      >
                        {item.name}
                      </span>
                    </td>

                    <td>
                      {item.published ? (
                        <span className="badge bg-success">Published</span>
                      ) : (
                        <span className="badge bg-danger">Private</span>
                      )}
                    </td>
                    <td className="text-end fw-bolder">$ {item.price}</td>
                    <td className="text-end">
                      <span className="fw-bolder">$ {item.priceDiscount}</span>
                    </td>
                    <td>
                      <span> {item.quantity}</span>
                    </td>
                    <td>
                      <div className="btn-group float-end">
                        <Link
                          className="btn btn-secondary shadow-none"
                          to={`/product/${item.slug}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(item.slug)}
                          className="btn btn-outline-secondary shadow-none"
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
