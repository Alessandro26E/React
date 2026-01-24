import './CartProductCard.css'
import { FaTrash } from 'react-icons/fa'
import formatNumber from '../../utils/formatNumber'
import { useContext } from 'react'
import AppContext from '../contexts/UserContext'

function CartProductCart ( props ) {
    const { productTitle, productPrice, thumbnail, productKey } = props
    const { cartProdutos, setcartProdutos } = useContext(AppContext)

    function removeCartProduct(key) {
        const updateCartProduct = cartProdutos.filter((product) => product.productKey !== key)
        setcartProdutos(updateCartProduct)
    }
    return (
        <div key={productKey} className='cart-product-card-container'>
            <img src={thumbnail} />
            <div className='product-info-box'>
                <h1>{productTitle}</h1>
                <p>{formatNumber(Number(productPrice))}</p>
            </div>
            <button onClick={() => removeCartProduct(productKey)}> <FaTrash/> </button>
        </div>
    )
}

export default CartProductCart;