import React from 'react';
import './MenuHeader.css';
import { Link } from 'react-router-dom';

function MenuHeader() {
  return ( 
    <div className='container'>
      <Link to="/" className='title'>Lifters Shop</Link>
      <a className='button-header'>Shop</a>
      <a className='button-header'>Stories</a>
      <a className='button-header'>About</a>
    </div>
  );
}

export default MenuHeader;