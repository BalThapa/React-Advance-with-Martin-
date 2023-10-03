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
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', marginLeft: '4rem'}}>

        <h1>Cart</h1>
        
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', margin: '4rem', gap:"4rem"}}>   
            {cartItems.length === 0 &&
            <div>
             <h2>Your cart is empty!!</h2> 
                <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="gif" />
            </div>
            
        }
            {cartItems.map((item)=>(
                <Product 
             
                {...item}/>
                
                
            ))}
            
        </Container>
        </div>
        </div>
    );
};

export default ShoppoCart;