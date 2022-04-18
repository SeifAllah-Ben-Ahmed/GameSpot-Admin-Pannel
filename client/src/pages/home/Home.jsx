import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Widget from '../../components/Widget/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <main className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <h2 className="listTitle">Latest Transactions</h2>
          <Table />
        </div>
      </main>
    </div>
  );
};

export default Home;
