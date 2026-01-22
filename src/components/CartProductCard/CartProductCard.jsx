import './CartProductCard.css'
import { FaTrash } from 'react-icons/fa'
function CartProductCart () {

    return (
        <div className='cart-product-card-container'>
            <img src="Product_Thumbnail" src="https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp"/>
            <div className='product-info-box'>
                <h1>Iphone 17 PRO MAX 256GB 2026</h1>
                <p>R$0,00</p>
            </div>
            <button> <FaTrash/> </button>
        </div>
    )
}

export default CartProductCart;