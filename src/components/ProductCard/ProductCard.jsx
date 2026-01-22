import './ProductCard.css'
import { FaCartPlus } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import formatNuber from '../../utils/formatNumber'

function ProductCard ({ thumbnail, productTitle, productPrice, productRating }) {
    return (
        <div className='card-container'>
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