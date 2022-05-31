import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

const Tab = ({ orders }) => {
  if (!orders.length) {
    return (
      <div className=" col h-100  ">
        <h3 className=" text-center bg-danger text-white">
          Order List Is empty
        </h3>
      </div>
    );
  }
  return (
    <div className="card py-2">
      <div className="table-responsive">
        <table className="table table-responsive table-borderless">
          <thead>
            <tr className="bg-light">
              <th scope="col" width="10%">
                Date
              </th>
              <th scope="col" width="30%">
                Card
              </th>
              <th scope="col" width="10%">
                Status
              </th>
              <th scope="col" width="15%">
                Paid
              </th>
              <th scope="col" width="10%">
                Total
              </th>
              <th scope="col" width="25%">
                Address shipping
              </th>
              <th scope="col" className="text-end" width="15%">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<Loading />}>
              {orders.map((item) => (
                <tr key={item._id}>
                  <td>{item.createdAt.split('T')[0]}</td>
                  <td className="d-flex flex-column">
                    {item.order.map((el) => (
                      <small key={el._id}>
                        {el.product?.name}: {el.quantity} * ${el.price}
                      </small>
                    ))}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === 'Canceled'
                          ? 'bg-danger'
                          : item.status === 'Completed'
                          ? 'bg-success'
                          : 'bg-warning'
                      } ms-1`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        !item.paid ? 'bg-danger' : 'bg-success'
                      } ms-1`}
                    >
                      {item.paid ? 'Paid' : 'Not Paid'}
                    </span>
                  </td>
                  <td>
                    <strong>{item.total}$</strong>
                  </td>
                  <td>
                    <span>
                      {item.shippingAddress.street},{' '}
                      {item.shippingAddress.country},{' '}
                      {item.shippingAddress.city}
                      {item.shippingAddress.postalCode}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group float-end">
                      <Link
                        className="btn btn-secondary shadow-none"
                        to={`/order/${item._id}`}
                      >
                        Veiw More
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab;
