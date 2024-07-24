import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart() {
  return ( 
    <section className='cart'>
      <div className='cart-items'>
        <CartItem produto={{fotos: '', titulo: '', valor: '123'}}/>
      </div>
      <div className='cart-resumo'>resumo do carrinho</div>
    </section>
  );
}

export default Cart;