import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import './widget.scss';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case 'user':
      data = {
        type: 'User',
        isMoney: false,
        link: 'See All Users',

        percentage: -10,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        type: 'Orders',
        isMoney: false,
        percentage: 20,
        link: 'See All Orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32,0.2)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        type: 'Balance',
        isMoney: false,
        percentage: 50,
        link: 'See Totals',
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0,0.2)',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.type}</span>
        <span className="counter">{data.isMoney && '$'} 100</span>
        <Link to="/" className="link">
          {data.link}
        </Link>
      </div>
      <div className="right">
        {data.percentage > 0 ? (
          <div className="percentage">
            <KeyboardArrowUpIcon />
            {data.percentage}
          </div>
        ) : (
          <div className="percentage negative">
            <KeyboardArrowDownIcon />
            {data.percentage}
          </div>
        )}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
