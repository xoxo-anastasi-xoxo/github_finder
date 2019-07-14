import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = ({imgClassName = 'fa fa-github', title = 'Github Finder', theme='primary'}) => (
    <nav className={`navbar bg-${theme}`}>
        <h1><i className={imgClassName} aria-hidden='true'/> {title} </h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
);