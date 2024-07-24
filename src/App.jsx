import React from 'react';
import Header from './componentes/Header/Header';
import ContainerTitle from './componentes/ContainerTitle/ContainerTitle';
import Products from './componentes/Products/Products';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <ContainerTitle />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
