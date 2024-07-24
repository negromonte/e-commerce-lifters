import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
// import { Link } from 'react-router-dom';


const ProductCard = ({ produto }) => {
  const { titulo, fotos } = produto;
  const imagensPrincipais = fotos.find(foto => foto.capa);

  if (!imagensPrincipais) {
    return null; 
  }

  return (
    <section className='product-card'>
      {/* <Link to={`/produto/${encodeURIComponent(titulo)}`} className='product-link'> */}
      <img 
        src={imagensPrincipais.url}
        alt={titulo}
        className='product-image'
      />
      {/* </Link> */}
      <div className='product-details'>
        <h2 className='product-title'>{titulo}</h2>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  produto: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    fotos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        capa: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProductCard;
