import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';
import { useAppDispatch } from '../app/hooks';
import {removeItemFromCart} from "../features/cartSlice";

const ShoppoCartProduct = (props) => {
    const { image, title, category, price } = props
    const product = props;
    const dispatch = useAppDispatch();

    const handleRemoveProduct = () =>{
        console.log('Product:', product);
        dispatch(removeItemFromCart(product))
    }

    return (
        <section className='Detail'>
            <article className='Detail_thumbnail' >
                <Card bg='light'   
                 style={{ display: 'flex',
                 width:'30rem',
                 height:'100%',
                 flexWrap: 'wrap', 
                 margin: '4rem', 
                 padding:'1rem', 
                 gap:"4rem"}}>
                <CardImg src={image} alt={title} />
                <Card.Body>
                    <Card.Title><h2>{title}</h2></Card.Title>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    

                    <Button variant='danger' onClick={handleRemoveProduct}>Remove from Cart</Button>
                </Card.Body>
                </Card>
            </article>
        </section>
    );
};

export default ShoppoCartProduct;