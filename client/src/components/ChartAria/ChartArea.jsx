import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mai',
  'Jun',
  'Jull',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const ChartArea = ({ data }) => {
  const dataFormat = data?.map((el) => ({ ...el, month: month[el.month - 1] }));
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="text-muted fw-normal">Yearly Earning</h3>
        <div style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dataFormat}
              margin={{
                top: 15,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="number"
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
