import React from 'react';
import Header from "../Components/Header";
import "./Homepage.css";
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
           <Header /> 
            <div className='herobanner'>
                 <video autoPlay loop muted play-inlineline='true'>
                    <source src='https://cdn.pixabay.com/vimeo/490977482/woman-59093.mp4?width=640&hash=72897ca0c40609885297e2a57b9532fce35c4c09'/>
                </video> 
            </div>
            <div className='line'>
                <div>
                    <h1>10%</h1>
                    <h5>OFF</h5>
                    <p>ON ORDERS OF 45€</p>
                </div>
                <div>
                    <h1>15%</h1>
                    <h5>OFF</h5>
                    <p>ON ORDERS OF 75€</p>
                </div>
                <div>
                    <h1>20%</h1>
                    <h5>OFF</h5>
                    <p>ON ORDERS OF 115€</p>
                </div>
                <div style={{display:'flex', alignItems:'center',backgroundColor:'black', padding:'5px', height:'5rem', color:'white' }}>
                    <h3>CODE:</h3>   
                    <h1>25SALE</h1>    
                </div>
            </div>
            <div className='discount'>
                <h1>Get heavy Discount in ALL Collection</h1>
                <img src='https://media.allure.com/photos/57dc1a877b47312c0ad83725/16:9/w_2560%2Cc_limit/model%2520jcrew.jpg' alt="modles"  />
                <div className='box'>
                <h1>Get yours now</h1>
                <Link to= {`/products`} style={{textDecoration:'none'}}><h4>←Shop Now</h4></Link>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Homepage;