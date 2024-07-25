import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function Cart() {

  const { cartItems, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => {
    const valor = parseFloat(item.valor.replace('$', ''));
    return acc + valor;
  }, 0);
  const formattedPrice = totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
        {cartItems.map((produto, index) => <CartItem key={index} produto={produto} />)}
      </div>
      <div className='cart-resume'>
        <div className='cart-resume-total'>Total:</div>
        <div className='cart-resume-price'>{formattedPrice}</div>
      </div>
      <Link to='/paymentPage'><button className='cart-button-checkout'>Checkout</button></Link>
    </section>
  );
}

export default Cart;