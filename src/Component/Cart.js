import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const { products } = useSelector((State) => State.MyCart);
    const dispatch = useDispatch();
    console.log(products)

    return (
        <div>
            {/* {cart.item.map((item) => {
                <div key={item.id}>
                    <h4>{item.name} - ${item.price}X{item.quantity}</h4>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>

                </div>
            })}

            <h3>Total Price: ${cart.totalPrice.toFixed(2)}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}
        </div>
    )
}

export default Cart