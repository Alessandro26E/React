import { IoMdCart } from 'react-icons/io'
import AppContext from '../contexts/UserContext'
import './Cart.css'
import { useContext } from 'react'

function Cart() {

    const { cartProdutos, setcartVisible, cartVisible} = useContext(AppContext)

    return (
        <button onClick={() => setcartVisible(!cartVisible)} className='cart_button'> <IoMdCart/> <span>{cartProdutos.length}</span> </button>
    )
}

export default Cart;