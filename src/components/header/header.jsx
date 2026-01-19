import { useEffect, useState } from 'react';
import getProducts from '../../api/fetchProducts';
import Cart from '../Cart/Cart';
import './header.css'
import { IoIosSearch } from 'react-icons/io'

function Header( ) {
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log(search)
    },[search])


    return (
    <div className='container'>
        <form className='search_form'>
            <input onChange={({target}) => setSearch(target.value)} type="seach" placeholder='Busque um produto' required />
            <button type='button'> <IoIosSearch/> </button>
        </form>

        <Cart/>
    </div>
    )
}

export default Header;