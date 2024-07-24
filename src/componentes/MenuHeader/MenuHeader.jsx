import React from 'react';
import './MenuHeader.css';

function MenuHeader() {
  return ( 
    <div className='container'>
      <p className='title'>Lifters Shop</p>
      <a className='button-header'>Shop</a>
      <a className='button-header'>Stories</a>
      <a className='button-header'>About</a>
    </div>
  );
}

export default MenuHeader;