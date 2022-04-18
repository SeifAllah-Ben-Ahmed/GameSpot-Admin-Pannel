import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeReducer';
import { DarkModeOutlined } from '@mui/icons-material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './navbar.scss';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search ..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
          </div>

          <div className="item" onClick={() => dispatch({ type: 'TOGGLE' })}>
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <img src="/avatar.webp" alt="userImage" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
