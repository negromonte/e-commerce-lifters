import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';
import MenuHeader from '../MenuHeader/MenuHeader';

function Header(){
  return(
    <header className='header'>
      <div className='container'>
        <MenuHeader/>
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;