import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import PropTypes from 'prop-types';

function CartItem({produto}) {

  const { titulo, fotos, valor } = produto;

  return (
    <section className='cart-item'>
      <img 
        src={fotos} 
        alt="imagem do produto"
        className='cart-item-image' 
      />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{titulo}</h3>
        <h3 className='cart-item-price'>{valor}</h3>

        <button
          type='button'
          className='button__remove-item'
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  produto: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    valor: PropTypes.any.isRequired,
    fotos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        capa: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CartItem;