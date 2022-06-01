import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { orderStats } from '../../features/order/orderApi';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const COLORS = {
  Pending: '#FF8042',
  Canceled: '#dc3545',
  Completed: '#00c49f',
};

const ChartPie = () => {
  const dispatch = useDispatch();
  const { stats } = useSelector((store) => store.order);
  useEffect(() => {
    dispatch(orderStats());
  }, [dispatch]);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="text-muted fw-normal mt-0">Orders Status</h5>

        <PieChart width={450} height={250}>
          <Pie
            data={stats}
            cx={100}
            cy={100}
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {stats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconSize={10}
            width={200}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </div>
    </div>
  );
};

export default ChartPie;
