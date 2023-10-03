import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Card  } from 'react-bootstrap';
import { useAppDispatch } from '../app/hooks';
import { useLocation } from 'react-router-dom';
import {changeQuantity} from '../features/cartSlice'

const Products = (props) => {
     const { id, title,  price,  image, quantity} = props;
     const product = props;
     const cartItems = props.cartItems
     const dispatch = useAppDispatch();
     const location = useLocation();

     const handleAddProduct = () =>{
        dispatch(changeQuantity({...product,quantity:1}))
        alert('Your item is added');
    }
    const handleRemoveProduct = () =>{
        dispatch(changeQuantity({...product,quantity:-1}))
        alert('Do you want to remove this item?');
    }
    

    return (
        <div>
            <Card style= {{width: '18rem', padding:'1rem', display:'flex', justifyContent:'space-around',height:'45rem'}}>
                 <Card.Body style={{display:'flex', justifyContent:'space-around',flexDirection:'column',alignItems:'center'}}>
                    <Card.Img src={image} alt=""  style={{height:'15rem'}}/>
                    <Card.Text style={{border:'none',backgroundColor:'orange',color:'white', borderRadius:'50%', width:'3rem',height:'3rem', fontWeight:'bolder',fontSize:'x-large', padding:'6px', margin:'1rem' }} >{id}</Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{quantity ? `Quantity: ${quantity}`:""}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder'}}
                    >Price: {price}€</Card.Text> 
                     
                    <Button variant="secondary" style={{textDecoration:'none',  fontSize:'larger', width: '10em'}}><Link to={`/detail/${id}`} style={{textDecoration:'none', color:'wheat', fontSize:'larger', }}>Detail</Link></Button>
                    
                    <Button variant='primary' onClick={handleAddProduct}>Add To Cart</Button> 
                    {location.pathname === "/shoppocart" && <Button variant='danger' onClick={handleRemoveProduct}>Remove from Cart</Button>} 
                    {(cartItems > 0 && cartItems.find(item => item.id === product.id))&& <Button variant='danger' onClick={handleRemoveProduct}>Remove from Cart</Button>} 
                </Card.Body> 
            </Card> 
            
            
        </div>
    );
};

export default Products;