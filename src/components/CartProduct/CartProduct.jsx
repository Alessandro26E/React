import './CartProduct.css'
import { BsCartXFill } from 'react-icons/bs'
import formatNumber from '../../utils/formatNumber'
import AppContext from '../../contexts/AppContext'
import { useContext } from 'react'

function CartProduct ( props ) {

    const { productKey, title, price, thumbnail,quantity } = props

    const { cartProducts, setCartProducts } = useContext(AppContext)

    function cartRemoveProduct(itemId) {
        console.log(itemId)
        const newCartList = cartProducts.filter((item) => item.productKey !== itemId)
        setCartProducts(newCartList)
    }

    return (
        <div className='cart-product-container'>
            <img src={thumbnail} />
            <div className='title-div'>
                <h1>{title}</h1>
                <p>{`R$ ${formatNumber(price)}`}</p>
            </div>
            <p id='quantityText'>{`x${quantity}`}</p>
            <button onClick={() => cartRemoveProduct(productKey)}> <BsCartXFill /> </button>
        </div>
    )
}

export default CartProduct;