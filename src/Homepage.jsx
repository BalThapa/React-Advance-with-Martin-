import React from 'react';
import Header from "./Components/Header";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div>
           <Header /> 
            <div className='container'>
                <video autoPlay loop muted play-inlineline='true'>
                    <source src='https://v3.cdnpk.net/videvo_files/video/premium/video0240/large_watermarked/007_raznoe_03_push_empty_cart_FPpreview.mp4'/>
                </video>
            </div>
            <h1>Homepage</h1>
            <p>This is Homepage</p>
        </div>
    );
};

export default Homepage;