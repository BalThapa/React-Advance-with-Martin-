import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li>
                       <NavLink to='/'>Home</NavLink> 
                    </li>
                    <li>
                       <NavLink to='/Products'>ProductsList</NavLink> 
                    </li>
                    <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:'rgb(0, 60, 95)', border:'none', color: 'rgb(241, 92, 92)', fontWeight:'bolder'}}>
                        Categories
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:'lightBlue', border:'none', color: 'rgb(241, 92, 92)'}}>
                            <Dropdown.Item href="./men">Men's Clothing</Dropdown.Item>
                            <Dropdown.Item href="./women">Women's Clothing</Dropdown.Item>
                            <Dropdown.Item href="./jewelery">Jewelery</Dropdown.Item>
                            <Dropdown.Item href="./electronics">Electronics</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        
                    </li>
                </ul>
            </nav> 
            
        </div>
    );
};

export default Nav;