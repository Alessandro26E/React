
import './CartPage.css'
import CartProductCart from '../CartProductCard/CartProductCard';

import userContext from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import formatNumber from '../../utils/formatNumber';

function CartPage() {

    const { produtos, setProdutos, cartProdutos, setcartProdutos,setcartVisible, cartVisible } = useContext(userContext)
    
    useEffect(() => {
        console.log(produtos)
    },[produtos])

    const totalPrice = cartProdutos.reduce((acc, product) => {
        return product.productPrice + acc
    },0)

    return (
        <div className={`cart-container ${cartVisible ? 'cart-active' : ''}`}>
            <h1>CARRINHO DE COMPRAS</h1>

            <div className='cart-product-box'>
               {cartProdutos.map((product) => (
                 <CartProductCart productTitle={product.productTitle} productPrice={product.productPrice} thumbnail={product.thumbnail} productKey={product.productKey} />
               ))}

            </div>
            <h1>Total do Carrinho:</h1>
            <h1>{formatNumber(totalPrice)}</h1>
        </div>
    )
}

export default CartPage;