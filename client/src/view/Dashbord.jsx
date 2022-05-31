import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChartAria from '../components/ChartAria';
import ChartPie from '../components/ChartPie';
import Loading from '../components/Loading';
import Private from '../components/Private';
import Tab from '../components/Tab';
import Widget from '../components/Widget/Widget';
import { getOrders } from '../features/order/orderApi';

const Dashbord = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((store) => store.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const sliceOrder = orders.slice(0, 3);
  return (
    <Private>
      <main>
        <div className="row">
          <Widget />
          <Widget />
          <Widget />
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
            <ChartAria />
          </div>
        </div>
      </main>
    </Private>
  );
};

export default Dashbord;
