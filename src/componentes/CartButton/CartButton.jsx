import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import './CartButton.css';
import LoginButton from '../LoginButton/LoginButton';

function CartButton() {
  return (
    <div>
      <button type='button' className='button-header'>
        <IoBagHandleOutline />
        <span className='cart-status'>0</span>
      </button>
      <LoginButton />
    </div>
  );
}

export default CartButton;