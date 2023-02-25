import React from 'react';
import './header.css';

import { Banner, Navbar } from '../../components';

function Header({ sidebar }) {
  return (
    <>
      <Navbar sidebar={sidebar} />
      <Banner sidebar={sidebar} />
    </>
  );
}

export default Header;
