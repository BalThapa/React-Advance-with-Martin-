import React from 'react';
import Header from "../Components/Header";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div>
           <Header /> 
            <div className='herobanner'>
                 <video autoPlay loop muted play-inlineline='true'>
                    <source src='https://cdn.pixabay.com/vimeo/490977482/woman-59093.mp4?width=640&hash=72897ca0c40609885297e2a57b9532fce35c4c09'/>
                </video> 
            </div>
            <h1>Homepage</h1>
            <p>This is Homepage</p>
        </div>
    );
};

export default Homepage;