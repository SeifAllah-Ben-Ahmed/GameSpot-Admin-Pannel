import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { deleteOrder, getOrders } from '../features/order/orderApi';

const Order = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((store) => store.order);

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="card">
      <div className="card-body">
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
                  Shipping Cost
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
                      <strong>{item.shippingCost}$</strong>
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
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-outline-secondary shadow-none"
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </Suspense>
            </tbody>
          </table>
        </div>
        {!orders.length && !isLoading && (
          <div className=" col ">
            <h3 className=" text-center bg-danger text-white">
              Order List Is empty
            </h3>
          </div>
        )}
      </div>
    </main>
  );
};

export default Order;
