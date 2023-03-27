import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
            //always show me a single product! what is is it!
            console.log('Single Product Details:', data[0]);
        }
        loadData();
    }, []);

    const handleAddToCart = (product) => {
        // console.log('GOT PRODUCT:', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary:</h4>
                <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;