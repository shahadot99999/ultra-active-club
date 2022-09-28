import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, img, ForAge, Time } = props.product
    return (
        <div className='product'>
            <img src={img} alt=""></img>

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>ForAge:{ForAge}</p>
                <p>Time:{Time}</p>
            </div>

            <button className='btn-cart'>
                <p>
                    Add to cart
                </p>
            </button>
        </div>

    );
};

export default Product;