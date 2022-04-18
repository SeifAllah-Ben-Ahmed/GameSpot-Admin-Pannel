import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './sidebar.scss';
import { DarkModeContext } from '../../context/darkModeReducer';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <aside className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Bio Panel </span>
        </Link>
      </div>
      <hr />
      <nav className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashbord</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <span>products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <li>
              <PaymentIcon className="icon" />
              <span>Order</span>
            </li>
          </Link>
          <p className="title">OPTIONS</p>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <p className="title">OPTIONS</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
        <div className="colorOptions"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
