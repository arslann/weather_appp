import React from 'react';
import './navbar.css';

import { FaAlignJustify } from 'react-icons/fa';

function Navbar({ sidebar }) {
  const toggle = sidebar[0];
  const setSidebar = sidebar[1];

  return (
    <div className="wa__navbar">
      <h3 className="wa__navbar-title">Hava Durumu Sorgula</h3>
      <FaAlignJustify
        className="wa__navbar-icon"
        onClick={() => setSidebar(!toggle)}
      />
    </div>
  );
}

export default Navbar;
