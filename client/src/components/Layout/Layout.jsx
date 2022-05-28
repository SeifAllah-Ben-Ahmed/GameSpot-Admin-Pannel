import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Private from '../Private';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === '/login' ? (
        <>{children}</>
      ) : (
        <Private>
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
        </Private>
      )}
    </>
  );
};

export default Layout;
