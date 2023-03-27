import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 0.1 // let tax 10%
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart-info'>
            <div>
                <h5 className='order-summary'>Order Summary</h5>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Cart;