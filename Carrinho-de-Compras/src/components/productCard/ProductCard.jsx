import './ProductCard.css'
import { FaStar } from 'react-icons/fa'
import { SlEnergy } from 'react-icons/sl'
import { FaCartPlus } from 'react-icons/fa'

function ProductCard ( props ) {

    const { productKey, title, price, thumbnail, rating } = props


    return (
        <div key={productKey} className='card-container'>
            <img src={thumbnail} />

            <div className='product-infos'>
                <h1>{title}</h1>
                <h1 id='price-h1'>{`R$ ${price}`}</h1>
                <span> 
                    < FaStar id='star' /> 
                    <p>{rating}</p>
                </span>
                
                <div className='frete-div'>
                    <p>Frete Grátis</p>
                    <SlEnergy />
                    <p id='full-text'>FULL</p>
                </div>

            </div>

            <button id='cart-btn'> <FaCartPlus /> </button>
        </div>
    )
}

export default ProductCard;