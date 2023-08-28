import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Products = (props) => {
     const { id, title,  price,  image} = props;

    return (
        <div>
            <Card style= {{width: '18rem', padding:'1rem', display:'flex', justifyContent:'space-around',height:'45rem'}}>
                 <Card.Body style={{display:'flex', justifyContent:'space-around',flexDirection:'column'}}>
                    <Card.Img src={image} alt=""  style={{height:'15rem'}}/>
                    <Card.Text style={{border:'none',backgroundColor:'orange',color:'white', borderRadius:'50%', width:'3rem',height:'3rem', fontWeight:'bolder',fontSize:'x-large', padding:'6px', margin:'1rem' }} >{id}</Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{fontWeight:'bolder'}}>Price: {price}€</Card.Text> 
                     
                    <Button variant="secondary" style={{textDecoration:'none',  fontSize:'larger', width: '10em'}}><Link to={`/detail/${id}`} style={{textDecoration:'none', color:'wheat', fontSize:'larger', }}>Detail</Link></Button>
                                
                    
                </Card.Body> 
            </Card> 
         
            
        </div>
    );
};

export default Products;