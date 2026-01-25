import './App.css';
import Header from './components/header/header';
import ProductSlider from './components/productSlider/ProductSlider'
import ProductSection from './components/productSection/ProductSection';

function App() {

  return (
    <div className='box-container'>
      <Header/>
      <ProductSlider/>
      <ProductSection/>
    </div>
  )
}

export default App
