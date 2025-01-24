import React, { useState } from 'react';
import Menu from './Menu';
import '../css/Header.css';
import {PAGES} from "../routes/routes";
import {Link} from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <button className="menu-btn" onClick={toggleMenu}>
                Menu
            </button>
            <Link to={PAGES.HOME} className="logo">Study Japanese</Link>
            {menuOpen && <Menu />}
        </header>
    );
};

export default Header;
