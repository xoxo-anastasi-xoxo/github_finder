import React from 'react';

export const NavBar = ({imgClassName = 'fa fa-github', title = 'Github Finder', theme='primary'}) => (
    <nav className={`navbar bg-${theme}`}>
        <h1><i className={imgClassName} aria-hidden="true"/> {title} </h1>
    </nav>
);