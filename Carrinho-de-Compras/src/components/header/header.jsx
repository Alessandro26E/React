import './header.css'
import { IoIosSearch } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'

import FetchApi from '../../Api/FetchApi'
import AppContext from '../../contexts/AppContext'
import { useContext, useState } from 'react'

function Header() {
    
  const { produtos, setProdutos, search, setSearch } = useContext(AppContext)
  console.log(search)
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

            <button className='cart-btn'> <FaShoppingCart /> </button>
        </div>
    </div>
  )
}

export default Header;