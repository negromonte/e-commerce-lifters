import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import './Products.css';
import Filters from '../Filters/Filters';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao carregar produtos:', error));
  }, []);

  return (
    <>
      <div className='body'>
        <Filters />
        <section className='products-container'>
          {products.map((produto, index) => (
            <ProductCard key={index} produto={produto} />
          ))}
        </section>
      </div></>
  );
}

export default Products;