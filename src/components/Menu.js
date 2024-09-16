import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import {PAGES} from "../routes/routes";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to={PAGES.READING}>Чтение</Link></li>
                <li><Link to={PAGES.KANJI}>Кандзи</Link></li>
                <li><Link to={PAGES.VOCABULARY_LIST}>Слова</Link></li>
                <li><Link to={PAGES.GRAMMAR}>Грамматика</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
