import './App.css';

import { useState } from 'react';

import Header from './components/header/header';
import ProductSlider from './components/productSlider/ProductSlider'
import ProductSection from './components/productSection/ProductSection';
import Cart from './components/Cart/Cart'

import AppContext from './contexts/AppContext';

function App() {
  const [search, setSearch] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartVisible, setCartVisible] = useState(false)

  return (
    <AppContext.Provider
      value={{
        produtos,
        setProdutos,
        search,
        setSearch,
        cartVisible,
        setCartVisible,
        cartProducts,
        setCartProducts,
      }}
    >
      <div className="box-container">
        <Header />
        <ProductSlider />
        <ProductSection />
        <Cart />
      </div>
    </AppContext.Provider>
  );
}

export default App
