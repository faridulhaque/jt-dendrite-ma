import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Styles.css'
import { BsMusicNoteList, BsSearch,  } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li> <Link to='/home'> <AiOutlineHome className='me-3' />Home</Link> </li>
                <li> <Link to='/favorites'><AiOutlineHeart className='me-3' />Favorites</Link> </li>
                <li> <Link to='/playlists'><BsMusicNoteList className='me-3' />Playlists</Link> </li>
                <li> <Link to='/search'><BsSearch className='me-3' />Search</Link> </li>

            </ul>
        </div>
    );
};

export default Sidebar;