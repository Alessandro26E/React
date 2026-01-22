
import './CartPage.css'
import CartProductCart from '../CartProductCard/CartProductCard';

function CartPage() {

    return (
        <div className="cart-container">
            <h1>CARRINHO DE COMPRAS</h1>

            <div className='cart-product-box'>
                <CartProductCart/>

            </div>
        </div>
    )
}

export default CartPage;