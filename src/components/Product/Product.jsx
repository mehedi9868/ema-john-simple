import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = ({ product, handleAddToCart }) => {
    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = product;
    return (
        <>
            <div className='product'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <div>
                        <h5 className='product-name'> {name}</h5>
                        <p className='product-price'>Price: ${price}</p>
                    </div>
                    <div>
                        <p className='manufacturer'>Manufacturer: {seller}</p>
                        <p className='ratings'>Ratings: {ratings} Stars</p>
                    </div>
                </div>
                <button onClick={() => handleAddToCart(product)} className='btn-add-to-cart'>
                    <span className='btn-text'>Add to Cart</span>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </>
    );
};

export default Product;