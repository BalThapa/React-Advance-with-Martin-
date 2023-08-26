import React from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./Detail.css";


const Detail = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    useEffect(() => {
      axios
            .get(`https://fakestoreapi.com/products/${productId}`)//product id is for rendering the description as per id
            .then((res)=>{
                setData(res.data)
            })
    },[productId]);

    return (
        <div className='detailList'>
            <div className='detailCard'>
            <Card style= {{width: '20rem', padding:'1rem', display:'flex', height:'65rem', alignItems:'center', boxShadow: '0 0 5px rgb(92, 92, 92)'}}>
                 <Card.Body style={{display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent:'space-around'}}>
                    <Card.Img src={data.image} alt=""  style={{height:'15rem'}}/>
                    <Card.Text style={{border:'none',backgroundColor:'orange',      color:'white', borderRadius:'50%', width:'3rem',height:'3rem', fontWeight:'bolder',fontSize:'x-large', padding:'6px', margin:'1rem' }} >{data.id}</Card.Text>
                    <Card.Title>{data.title }</Card.Title>
                    <Card.Text style={{fontWeight:'bolder'}}>Price: {data.price}€</Card.Text>                              
                    <Card.Text style={{fontStyle:'italic'}}>{data.description}</Card.Text>
                     <Card.Text style={{fontWeight:'bolder', color:'red'}}>Rating: {data.rating ? data.rating.rate:'N/A'}</Card.Text>
                     <Card.Text style={{fontWeight:'bolder'}}>Count: {data.rating ?data.rating.count:'N/A'}</Card.Text> 
                    <Card.Text style={{fontWeight:'bolder'}}>Category: {data.category}</Card.Text>
                </Card.Body> 
                     <Button variant="secondary" onClick={() => navigate(-1)} style={{textDecoration:'none', color:'wheat', fontSize:'larger', width: '10em'}}>Go back</Button>
            </Card>                        
            </div>
        </div>
    );
};

export default Detail;