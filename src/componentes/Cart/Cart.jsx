import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function Cart() {

  const { isCartVisible } = useContext(AppContext);

  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
        <CartItem produto={{fotos: '', titulo: '', valor: '123'}}/>
      </div>
      <div className='cart-resume'>resumo do carrinho</div>
      <Link to='/paymentPage'><button className='cart-button-checkout'>Checkout</button></Link>
    </section>
  );
}

export default Cart;