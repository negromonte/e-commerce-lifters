import React from 'react';
import Provider from './context/Provider';
import Header from './componentes/Header/Header';
import Cart from './componentes/Cart/Cart';
import ContainerTitle from './componentes/ContainerTitle/ContainerTitle';
import Products from './componentes/Products/Products';

function Home() {
  return (
    <Provider>
      <div>
        <Header />
        <ContainerTitle />
        <Products />
        <Cart/>
      </div>
    </Provider>
  );
}

export default Home;
