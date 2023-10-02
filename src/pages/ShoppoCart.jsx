import React from 'react';
import { Container} from 'react-bootstrap';
import { useAppSelector } from '../app/hooks';
import Product from './Product';
import Header from '../Components/Header';


const ShoppoCart = () => {
    const cartItems = useAppSelector(state => state.cart.cart)
    console.log('CartItems;' ,cartItems);
    return (
        <div>
        <Header/>
        
        <Container>
            <h1>Cart</h1>
            
            {cartItems.length === 0 && <h2>Your cart is empty!! </h2>}
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="gif" />
            {cartItems.map((item)=>(
                <Product 
             
                {...item}/>
                
                
            ))}
            
        </Container>
        </div>
    );
};

export default ShoppoCart;