import React from 'react';
//import { useAddCart } from '../Hooks/CartContext';
import  Button from 'react-bootstrap/Button';

const AddButton = () => {
    //const {count, setCount} = useAddCart();

    // const buttonHandler = () => {
    //     setCount(count + 1);
    // }
    return (
        <div>
            <Button variant="secondary"
            //  onClick={buttonHandler} 
             style={{textDecoration:'none',  fontSize:'larger', width: '10em',color:'wheat'}}>Add To Cart</Button>
        </div>
    );
};

export default AddButton;