import React, { useContext } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import './CartButton.css';
import LoginButton from '../LoginButton/LoginButton';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { isCartVisible, setIsCartVisible } = useContext(AppContext);
  
  return (
    <div>
      <button 
        type='button' 
        className='button-header'
        onClick={ () => setIsCartVisible(!isCartVisible)}>
        <IoBagHandleOutline />
        <span className='cart-status'>0</span>
      </button>
      <LoginButton />
    </div>
  );
}

export default CartButton;