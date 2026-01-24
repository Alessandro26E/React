import { useEffect, useState } from 'react';
import fetchProducts from '../../api/fetchProducts'
import Cart from '../Cart/Cart';
import './header.css'
import { IoIosSearch } from 'react-icons/io'
import ProductCard from '../ProductCard/ProductCard';
import CartPage
 from '../CartPage/CarTPage';

import userContext from '../contexts/UserContext'; 

function Header( ) {
    const [search, setSearch] = useState('')
    const [produtos, setProdutos] = useState([])
    const [cartProdutos, setcartProdutos] = useState([])
    const [cartVisible, setcartVisible] = useState(false)

    return (
      <userContext.Provider value={{ produtos, setProdutos, cartProdutos, setcartProdutos, setcartVisible, cartVisible }}>

      
      <div className="box-container">

        <CartPage/>
        
        
        <div className="container">
          <form onSubmit={async (event) => {
              event.preventDefault();
              const results = await fetchProducts(search);
              
              setProdutos(results)
              console.log(produtos)
              setSearch('')
            }} className="search_form">

            <input
              onChange={({ target }) => setSearch(target.value)}
              type="search"
              placeholder="Busque um produto"
              required
            />

            <button type="button"><IoIosSearch /></button>
          </form>

          <Cart />
        </div>

        <div className="product-container">
          {produtos.map((produto) =>  (
            <ProductCard
            productKey={produto.id}
            thumbnail={produto.thumbnail} 
            productTitle={produto.title}
            productPrice={produto.price}
            productRating={produto.rating}
            />
  
            ))}
        </div>
        
        
      </div>
      </userContext.Provider>
    );
}

export default Header;