import './header.css'
import { IoIosSearch } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'

import FetchApi from '../../Api/FetchApi'
import AppContext from '../../contexts/AppContext'
import { useContext } from 'react'

function Header() {
    
  const { setProdutos, search, setSearch, cartVisible, setCartVisible} = useContext(AppContext)
  
  return (
    <div className='container'>
        <div className='main-container'>
            <img src="https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png" alt="mp-logo" />

            <form 
            onSubmit={async (event) => {
                event.preventDefault()
                const result = await FetchApi(search)
                setProdutos(result)
            }} 
            className='search-container'>
                
            <input onChange={(event) => setSearch(event.target.value)} type="search" placeholder='Buscar Produto' />
            <button><IoIosSearch/> </button>
            </form>

            <button onClick={() => setCartVisible(!cartVisible)} className='cart-btn'> <FaShoppingCart /> <span>{'0'}</span> </button>
        </div>
    </div>
  )
}

export default Header;