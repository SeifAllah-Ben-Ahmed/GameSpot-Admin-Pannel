import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import Loading from '../components/Loading';
import { editeOrder, getOrder } from '../features/order/orderApi';
import SwitchInput from '../components/SwitchInput';

const EditeOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { order, isLoading } = useSelector((store) => store.order);
  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h3>User Info</h3>
              <p>
                <strong>Name : </strong>
                {order.userInfo?.name}
              </p>
              <p>
                <strong>Email : </strong>
                {order.userInfo?.email}
              </p>
              <p>
                <strong>Phone : </strong>
                {order.userInfo?.phoneNumber}
              </p>
              <p>
                <strong>Address : </strong>
                <span>
                  {order.shippingAddress?.street},{' '}
                  {order.shippingAddress?.country},{' '}
                  {order.shippingAddress?.city}
                  {order.shippingAddress?.postalCode}
                </span>
              </p>
            </div>
            <div className="col">
              <h3>Order Info</h3>
              {!isLoading &&
                order?.order?.map((el) => (
                  <div className="d-flex" key={el._id}>
                    <img
                      src={`/images/products/${el.product?.imageCover}`}
                      height="100"
                      alt="order"
                    />
                    <div className="p-2">
                      <p>{el.product?.name}</p>
                      <p>
                        {el.price}$ * {el.quantity}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col">
              <Formik
                onSubmit={(values, actions) => {
                  dispatch(editeOrder({ values, id }));
                }}
                initialValues={{
                  status: order.status,
                  paid: order.paid,
                }}
              >
                {(formik) => (
                  <Form method="post" encType="multipart/form-data">
                    <h3 className="fw-normal text-muted mb-3">Add new Brand</h3>
                    <div className="mb-3">
                      <label htmlFor="status">Order Status</label>
                      <Field
                        id="status"
                        as="select"
                        name="status"
                        className={'form-control shadow-none '}
                        autoComplete="off"
                      >
                        {[
                          'Pending',
                          'In progress',
                          'Completed',
                          'Canceled',
                          'Refunded',
                        ]?.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-3">
                      <SwitchInput lable="paid" name="paid" />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        className="btn my-3 btn-danger btn-lg"
                        type="submit"
                      >
                        Update Order
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default EditeOrder;
