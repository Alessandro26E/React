import './App.css';
import Header from './components/header/header';
import ProductSlider from './components/productSlider/ProductSlider'
import ProductSection from './components/productSection/ProductSection';

import AppContext from './contexts/AppContext';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [produtos, setProdutos] = useState([]);

  return (
    <AppContext.Provider value={{ produtos, setProdutos, search, setSearch }}>
      <div className="box-container">
        <Header />
        <ProductSlider />
        <ProductSection />
      </div>
    </AppContext.Provider>
  );
}

export default App
