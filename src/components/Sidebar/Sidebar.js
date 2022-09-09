import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li> <Link to='/home'>Home</Link> </li>
                <li> <Link to='/favorites'>Favorites</Link> </li>
                <li> <Link to='/playlists'>Playlists</Link> </li>
                <li> <Link to='/search'>Search</Link> </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;