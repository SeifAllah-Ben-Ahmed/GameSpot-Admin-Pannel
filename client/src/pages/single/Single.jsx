import Chart from '../../components/Chart/Chart';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/Table/Table';
import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editeButton">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
                alt="item"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :</span>
                  <span className="itemValue">jane@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemValue">+1 2313 12 86</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress :</span>
                  <span className="itemValue">
                    Elton St. 234 Grand Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Chart" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
