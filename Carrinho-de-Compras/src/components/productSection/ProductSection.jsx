import './ProductSection.css'
import ProductCard from '../productCard/productCard';

import AppContext from '../../contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import { RiCoreosLine } from 'react-icons/ri';

function ProductSection () {

    const { produtos } = useContext(AppContext)
    
    useState(() => {
        console.log(produtos)
    },[produtos])

    return (
        <div className='product-container'>
            <div className='products-box'>
                {produtos.map((item) => 
                    <ProductCard productKey={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} rating={item.rating} />
                )}
            </div>
        </div>
    )
}

export default ProductSection;