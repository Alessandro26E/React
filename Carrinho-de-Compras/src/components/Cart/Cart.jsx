import './Cart.css'

import AppContext from '../../contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import formatNumber from '../../utils/formatNumber';
import CartProduct from '../CartProduct/CartProduct'

function Cart() {

    const { cartProducts ,cartVisible } = useContext(AppContext)

    const [total, setTotal] = useState(0)

    function calcuTotal() {
      const valorTotal = cartProducts.reduce((acc, item) => acc + item.price,0,);
      setTotal(valorTotal);
    }
    console.log("Oi")
    useEffect(() => {
        calcuTotal()
    }, [cartProducts])

    return (
        <div className={`cart-container ${cartVisible ? "cart-container--active" : ''}`}>
            <div className='top-div'>
                <h1>Resumo da Compra</h1>
            </div>

            <div className='infos-div'>
                {cartProducts.map((item) => <CartProduct productKey={item.productKey} title={item.title} price={item.price} thumbnail={item.thumbnail} />)}
            </div>

            <div className='footer-div'>
                <div className='total-div'>
                    <h1>Total</h1>
                    <h1>{formatNumber(total)}</h1>
                </div>
                <button>Continuar a compra</button>
            </div>
        </div>
    )
}

export default Cart;