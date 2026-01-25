import './ProductSection.css'
import ProductCard from '../productCard/productCard';

import AppContext from '../../contexts/AppContext';
import { useContext, useState } from 'react';

function ProductSection () {

    const { produtos } = useContext(AppContext)
    
    useState(() => {
        console.log(produtos)
    },[produtos])

    return (
        <div className='product-container'>
            <div className='products-box'>
                {produtos.map((item) => 
                    <ProductCard productKey={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} rating={item.rating} quantity={item.quantity ? item.quantity : 0} />
                )}
            </div>
        </div>
    )
}

export default ProductSection;