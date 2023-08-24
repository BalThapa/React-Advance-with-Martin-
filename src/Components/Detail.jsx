import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
    const { id, title, category,  price, description, image, rating } = props;
    const navigate = useNavigate();

    return (
        <div className='overlay'>
        <div>
            <Card style= {{width: '18rem', padding:'1rem', display:'flex', height:'55rem'}}>
                <Card.Body>
                    <Card.Img src={image} alt=""  style={{height:'15rem'}}/>
                    <Card.Text style={{border:'none',backgroundColor:'orange',color:'white', borderRadius:'50%', width:'3rem',height:'3rem', fontWeight:'bolder',fontSize:'x-large', padding:'6px', margin:'1rem' }} >{id}</Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{fontWeight:'bolder'}}>{price}€</Card.Text>
                    <Card.Text style={{fontStyle:'italic'}}>{description}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder', color:'red'}}>{rating.rate}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder'}}>{rating.count}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder'}}>{category}</Card.Text>   
                </Card.Body>
            </Card>
        </div>
        <div className='back'>
        <button onClick={() => navigate(-1)}>Go back </button>
        </div> 
       </div>
    );
};

export default Detail;