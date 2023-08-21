import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/' className='Nal'><h1>Shoppo</h1></NavLink>
            <Nav />
        </div>
    );
};

export default Header;