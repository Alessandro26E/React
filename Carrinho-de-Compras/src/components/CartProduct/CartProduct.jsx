import './CartProduct.css'
import { BsCartXFill } from 'react-icons/bs'
import formatNumber from '../../utils/formatNumber'
import AppContext from '../../contexts/AppContext'
import { useContext } from 'react'

function CartProduct ( props ) {

    const { productKey, title, price, thumbnail, quantity } = props

    const { cartProducts, setCartProducts } = useContext(AppContext)

    function cartRemoveHandle(itemId) {
        const productInCart = cartProducts.find((item) => item.productKey === itemId)
        
        if (productInCart.quantity > 1) {
            setCartProducts(cartProducts.map((item) => item.productKey === itemId ? {...item, quantity: item.quantity - 1} : item))
        } else {
            return setCartProducts(cartProducts.filter((item) => item.productKey !== itemId))
        }
    }

    return (
        <div className='cart-product-container'>
            <img src={thumbnail} />
            <div className='title-div'>
                <h1>{title}</h1>
                <p>{`R$ ${formatNumber(price)}`}</p>
            </div>
            <p id='quantity_Text'>{`x${quantity}`}</p>
            <button onClick={() => cartRemoveHandle(productKey)}> <BsCartXFill /> </button>
        </div>
    )
}

export default CartProduct;