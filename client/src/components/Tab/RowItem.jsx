import React from 'react';
import { Link } from 'react-router-dom';

const RowItem = ({ item }) => {
  return (
    <tr>
      <td>{item.SKU}</td>

      <td>
        <img src={item.coverImage} width="25" alt={item.name} />
        {item.name}
      </td>

      <td>
        {item.published ? (
          <span className="ms-1 badge badge-pill badge-success">Published</span>
        ) : (
          <span className="ms-1 badge badge-pill badge-danger">Private</span>
        )}
      </td>
      <td className="text-end"> {item.quantity}</td>
      <td className="text-end">
        <span className="fw-bolder">$ {item.price}</span>
      </td>
      <td className="text-end">
        <span className="fw-bolder">$ {item.priceDiscount}</span>
      </td>
      <td>
        <div className="btn-group float-end">
          <Link
            className="btn btn-secondary shadow-none"
            to={`/product/${item.slug}`}
          >
            Edit
          </Link>
          <button className="btn btn-outline-secondary shadow-none">
            delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RowItem;
