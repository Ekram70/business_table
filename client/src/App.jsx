import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullscreenLoader from './components/masterLayout/FullScreenLoader';
import ProductList from './pages/ProductList';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </>
  );
};
export default App;
