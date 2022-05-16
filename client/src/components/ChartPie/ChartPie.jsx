import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

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
const data = [
  { name: 'Order Pending', value: 400 },
  { name: 'Order Canceled', value: 300 },
  { name: 'Order Shipped', value: 300 },
];
const COLORS = ['#FF8042', '#dc3545', '#00c49f'];

const ChartPie = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="text-muted fw-normal mt-0">Orders Status</h5>

        <PieChart width={450} height={250}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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
