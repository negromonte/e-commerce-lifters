// src/componentes/ProductDetails/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';

const ProductDetails = ({ match }) => {
  const { titulo } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/products?titulo=${titulo}`);
        if (!response.ok) {
          throw new Error('Erro ao carregar detalhes do produto');
        }
        const data = await response.json();
        if (data.length > 0) {
          setProduct(data[0]);
        } else {
          console.error('Produto não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    };

    fetchProductDetails();
  }, [titulo]);

  if (!product) {
    return <div className="product-details-container">Carregando detalhes do produto...</div>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.titulo}</h2>
      <div className="product-images">
        {product.fotos.map((foto, index) => (
          <img key={index} src={foto.url} alt={`Imagem ${index + 1}`} className={foto.capa ? 'main-image' : 'secondary-image'} />
        ))}
      </div>
      <div className="product-info">
        <p>{product.descricao}</p>
        <p>Valor: {product.valor}</p>
        <p>Categoria: {product.categoria}</p>
        <p>Cores disponíveis:</p>
        <ul className="product-colors">
          {product.cores.map((cor, index) => (
            <li key={index} style={{ backgroundColor: cor.codigo }}>{cor.nome}</li>
          ))}
        </ul>
        <p>Tamanhos disponíveis: {product.tamanhos.join(', ')}</p>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductDetails;
