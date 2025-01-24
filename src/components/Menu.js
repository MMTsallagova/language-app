import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import {PAGES} from "../routes/routes";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to={PAGES.READING}>READING</Link></li>
                <li><Link to={PAGES.KANJI}>KANJI</Link></li>
                <li><Link to={PAGES.VOCABULARY_LIST}>VOCABULARY</Link></li>
                <li><Link to={PAGES.GRAMMAR}>GRAMMAR</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
