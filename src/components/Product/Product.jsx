import React from 'react';
import './Product.css';
const Product = ({ product }) => {
    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = product;
    return (
        <>
            <div className='product'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <h5>Price: ${price}</h5>
                <p>Manufacturer:{seller}</p>
                <p>Ratings:{ratings}</p>
                <button className='btn-add-to-cart'>Add to Cart</button>
            </div>
        </>
    );
};

export default Product;