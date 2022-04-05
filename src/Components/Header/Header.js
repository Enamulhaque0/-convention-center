import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li> <NavLink to='/' className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink> </li>
                    <li> <NavLink to="/review" className={({ isActive }) => (isActive ? "link-active" : "link")}>Reviews</NavLink> </li>
                    <li> <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "link-active" : "link")}>Dashboard</NavLink> </li>
                    <li> <NavLink to="/blog" className={({ isActive }) => (isActive ? "link-active" : "link")}>Blog</NavLink> </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;