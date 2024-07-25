import React, { useContext } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import './CartButton.css';
import LoginButton from '../LoginButton/LoginButton';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
  
  return (
    <div>
      <button 
        type='button' 
        className='button-header'
        onClick={ () => setIsCartVisible(!isCartVisible)}>
        <IoBagHandleOutline />
        { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
      </button>
      <LoginButton />
    </div>
  );
}

export default CartButton;