import './ProductCard.css'
import { FaCartPlus } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import formatNuber from '../../utils/formatNumber'
import { useContext } from 'react'
import AppContext from '../contexts/UserContext'

function ProductCard ( props ) {
    const { productKey, thumbnail, productTitle, productPrice, productRating } = props
    const { cartProdutos, setcartProdutos } = useContext(AppContext)

    const addCartProduct = () => {
        setcartProdutos([...cartProdutos, props])
        console.log(cartProdutos)
    }

    return (
        <div key={productKey} onClick={addCartProduct} className='card-container'>
            <img src={thumbnail} alt="Product_Thumbnail" />
            <h1>{productTitle}</h1>
            <p>{formatNuber(productPrice)}</p>
            
              <div className='rating-div'>
                < FaStar id='starIcon'/>
                <p>{productRating}</p>
            </div>
            <span><FaCartPlus/></span>
        </div>
    )
}

export default ProductCard