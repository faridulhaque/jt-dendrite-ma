import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Nav className="me-auto">
                <Link to='/home'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/playlists'>Playlists</Link>
                <Link to='/search'>Search</Link>
            </Nav>
        </div>
    );
};

export default Menu;