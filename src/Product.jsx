import React from 'react';
import Card from 'react-bootstrap/Card';

const Products = (props) => {
    const { id, title, category, price, description, image, rating } = props;

    return (
        <div>
            <Card style= {{width: '18rem', padding:'1rem', display:'flex', height:'55rem'}}>
                <Card.Body>
            <Card.Img src={image} alt=""  style={{height:'15rem'}}/>
            <Card.Text >{id}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{fontWeight:'bolder'}}>{price}€</Card.Text>
            <Card.Text style={{fontStyle:'italic'}}>{description}</Card.Text>
            <Card.Text style={{fontWeight:'bolder', color:'red'}}>{rating.rate}</Card.Text>
            <Card.Text style={{fontWeight:'bolder'}}>{rating.count}</Card.Text>
            <Card.Text style={{fontWeight:'bolder'}}>{category}</Card.Text>  
            </Card.Body>
            </Card>
           
        </div>
    );
};

export default Products;