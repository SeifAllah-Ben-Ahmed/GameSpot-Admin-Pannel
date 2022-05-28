import ChartAria from '../components/ChartAria';
import ChartPie from '../components/ChartPie';
import Private from '../components/Private';
import Tab from '../components/Tab';
import Widget from '../components/Widget/Widget';

const Dashbord = () => {
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
            <Tab />
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
