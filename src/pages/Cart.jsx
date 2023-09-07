import React from 'react';
import Header from '../Components/Header';

const Cart = (props) => {
    const {cartItems} =props;
    return (
        <div>
            {<Header />}
           <h2>Carts items</h2> 
           <div>
            {cartItems.length === 0 && <div>Your Cart is empty</div>}
           </div>
        </div>
    );
};

export default Cart;