import React from 'react';
import './Product.css'

const Product = ({ product, handleToAddcard }) => {

    const { name, img, ForAge, Time } = product;
    // console.log(props)



    return (
        <div className='product'>
            <img src={img} alt=""></img>

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>ForAge:{ForAge}</p>
                <p>Time:{Time}</p>
            </div>

            <button onClick={() => handleToAddcard(product)} className='btn-cart'>
                <p>
                    Add to cart
                </p>
            </button>
        </div>

    );
};

export default Product;