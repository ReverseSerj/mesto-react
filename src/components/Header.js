import React from 'react';
import logo from '../images/logo_mesto.svg';

function Header() {
  return (
    <header class="header">
       <img class="header__logo" src={logo} alt="логотип сайта Mesto Russia"/>
    </header>
  )
}

export default Header;