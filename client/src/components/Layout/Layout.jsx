import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="bg-light bg-gradien">
      <div className="header">
        <div className="row">
          <Navbar />
        </div>
      </div>

      <div className="wrapper">
        <div className="row ">
          <Sidebar />
          <div className="col-10 offset-2 pe-0">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
