import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChartAria from '../components/ChartAria';
import ChartPie from '../components/ChartPie';
import Loading from '../components/Loading';
import Private from '../components/Private';
import Tab from '../components/Tab';
import Widget from '../components/Widget/Widget';
import { getOrders, yearlySales } from '../features/order/orderApi';

const Dashbord = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
    dispatch(yearlySales());
  }, [dispatch]);

  const {
    orders,
    isLoading,
    yearlySales: data,
  } = useSelector((store) => store.order);

  const totals =
    orders.length && orders?.reduce((acc, val) => acc + val.total, 0);
  const product =
    orders.length &&
    orders
      ?.map((el) =>
        el.order.reduce((acc, val) => acc + Number(val.quantity), 0)
      )
      .reduce((acc, val) => acc + val, 0);

  const sliceOrder = orders.slice(0, 3);

  return (
    <Private>
      <main>
        <div className="row">
          <Widget data={`${totals}$`} title="Total Sales" />
          <Widget data={`${product} Product`} title="Total Product Sales" />
          <Widget
            data={`${data?.reduce((acc, val) => acc + val.number, 0)} Order`}
            title="Order Counter"
            range="Early"
          />
        </div>
        <div className="row mt-2">
          <div className="col-lg-4">
            <ChartPie />
          </div>
          <div className="col-lg-8">
            {isLoading ? (
              <Loading height="h-100" />
            ) : (
              <Tab orders={sliceOrder} />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ChartAria data={data} />
          </div>
        </div>
      </main>
    </Private>
  );
};

export default Dashbord;
