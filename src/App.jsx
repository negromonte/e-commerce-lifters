import React from 'react';
import Provider from './context/Provider';
import AppRoutes from './Routes';

function App() {
  return (
    <Provider>
      <div>
        <AppRoutes/>
      </div>
    </Provider>
  );
}

export default App;
