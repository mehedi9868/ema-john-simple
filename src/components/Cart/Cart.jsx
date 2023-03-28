import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        //SHORTCUT: product.quantity = product.quantity || 1;
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        quantity = quantity + product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
    }
    const tax = totalPrice * 0.1 // let tax 10%
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart-info'>
            <div>
                <h5 className='order-summary'>Order Summary</h5>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Cart;