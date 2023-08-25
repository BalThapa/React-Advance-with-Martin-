import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

//import Detail from './Detail';

const Products = (props) => {
     const { id, title,  price,  image, rating } = props;

    return (
        <div>
            <Card style= {{width: '18rem', padding:'1rem', display:'flex', height:'55rem'}}>
                 <Card.Body>
                    <Card.Img src={image} alt=""  style={{height:'15rem'}}/>
                    <Card.Text style={{border:'none',backgroundColor:'orange',color:'white', borderRadius:'50%', width:'3rem',height:'3rem', fontWeight:'bolder',fontSize:'x-large', padding:'6px', margin:'1rem' }} >{id}</Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{fontWeight:'bolder'}}>Price: {price}€</Card.Text>  
                    <Card.Text style={{fontWeight:'bolder', color:'red'}}>Rating: {rating.rate}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder'}}>Count: {rating.count}</Card.Text>
                    <Link to={`/detail/${id}`}>See More</Link> 
                                                     
                    
                </Card.Body> 
            </Card> 
         
        </div>
    );
};

export default Products;