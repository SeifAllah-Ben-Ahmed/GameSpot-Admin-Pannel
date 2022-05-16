import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Jan',
    uv: 4000,
  },
  {
    name: 'Feb',
    uv: 3000,
  },
  {
    name: 'Mar',
    uv: 2000,
  },
  {
    name: 'Apr',
    uv: 2780,
  },
  {
    name: 'Mai',
    uv: 1890,
  },
  {
    name: 'Jun',
    uv: 2390,
  },
  {
    name: 'Jull',
    uv: 3490,
  },
];
const ChartArea = () => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="text-muted fw-normal">Yearly Earning</h3>
        <div style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 15,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#dc3545"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartArea;
