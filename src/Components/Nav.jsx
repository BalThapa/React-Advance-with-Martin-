import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li>
                       <NavLink to='/'>Home</NavLink> 
                    </li>
                    <li>
                       <NavLink to='/Products'>Products</NavLink> 
                    </li>
                    <li>
                       <NavLink to='/test'>Test</NavLink> 
                    </li>
                </ul>
            </nav> 
            
        </div>
    );
};

export default Nav;