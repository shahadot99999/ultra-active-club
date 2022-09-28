import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, ForAge, Time } = props.product;
    console.log(props)



    return (
        <div className='product'>
            <img src={img} alt=""></img>

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>ForAge:{ForAge}</p>
                <p>Time:{Time}</p>
            </div>

            <button onClick={() => props.handleToAddcard(props.product)} className='btn-cart'>
                <p>
                    Add to cart
                </p>
            </button>
        </div>

    );
};

export default Product;