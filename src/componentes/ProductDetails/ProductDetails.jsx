import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import AppContext from '../../context/AppContext';

const ProductDetails = () => {
  const { titulo } = useParams();
  const [produto, setProduto] = useState(null);
  const { cartItems, setCartItems } = useContext(AppContext);

  useEffect(() => {
    if (titulo) {
      fetch('https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end')
        .then(response => response.json())
        .then(data => {
          const product = data.find(item => item.titulo === decodeURIComponent(titulo));
          if (product) {
            setProduto(product);
          } else {
            console.error('Produto não encontrado:', titulo);
          }
        })
        .catch(error => console.error('Erro ao carregar produto:', error));
    }
  }, [titulo]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  const handleAddCart = () => {
    setCartItems([...cartItems, produto]);
  };

  return (
    <>
      <Header />
      <Cart />
      {/* To Do: Mudar esse trecho de codigo para um componente unico */}
      <section className="container">
        <div className="product-images">
          <img src={produto.fotos.find(foto => foto.capa).url} alt={produto.titulo} />
        </div>
        <div className="product-options">
          <div className="product-info">
            <h2>{produto.titulo}</h2>
            <p className="product-price">{produto.valor}</p>
            <p className="product-description">{produto.descricao}</p>
          </div>
          <div className="product-option-color">
            <h3 className='color-default'>Color</h3>
            <div className="color-options">
              {produto.cores.map((color, idx) => (
                <div
                  key={idx}
                  className={`color-option ${produto.nome === color.nome ? 'selected' : ''}`}
                  style={{ backgroundColor: color.codigo }}
                />
              ))}
            </div>
          </div>
          <div className="product-option-size">
            <h3 className='color-default'>Size</h3>
            <div className="size-options">
              {produto.tamanhos.map((size, idx) => (
                <button
                  key={idx}
                  className='size-option'
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="product-actions">
            <button
              type='button'
              className="add-to-bag"
              onClick={handleAddCart}
            >Add to Bag
            </button>
            <button className="back">Back</button>
          </div>
        </div>

      </section>
    </>
  );
};

export default ProductDetails;