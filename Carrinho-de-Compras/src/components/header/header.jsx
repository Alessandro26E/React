import './header.css'
import { IoIosSearch } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
function Header() {
    
    return (
        <div className='container'>
            <div className='main-container'>
                <img src="https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png" alt="mp-logo" />

                <div className='search-container'>
                    <input type="search" placeholder='Buscar Produto' />
                    <button><IoIosSearch/> </button>
                </div>

                <button className='cart-btn'> <FaShoppingCart /> </button>
            </div>
        </div>
    )
}

export default Header;