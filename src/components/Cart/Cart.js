import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const { cart } = props;

    let time = 0;
    for (const product of cart) {
        time = time + product.Time;
    }
    return (
        <div className='cart'>
            <div>
                <h3>Tonmoy Ahmed</h3>
                <h4>Berlin, Germany</h4>
            </div>

            <div>
                <h3>Add a Break Time</h3>
                <div>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>

            <div>
                <h2>Exercise Details</h2>
                <p>setCart Item: {cart.length}</p>
                <p>Exercise time:{time}s </p>
                <p>Break time:</p>
            </div>
        </div>
    );
};

export default Cart;