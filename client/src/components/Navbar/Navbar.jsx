import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar  card">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw246d832e/images/svg-icons/logo-gs-2.svg"
              alt="logo"
              height="30"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
