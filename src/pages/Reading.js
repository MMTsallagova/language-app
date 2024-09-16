import React, {useEffect, useState} from 'react';
import {fetchTextList} from "../api/api";
import {Link} from "react-router-dom";
import {PAGES} from "../routes/routes";

const Reading = () => {

    const [list, setList] = useState(null);

    useEffect(() => {
        fetchTextList().then((response) => setList(response.data))
    }, []);

    return (
        <div className="page_container">
            <Link to={`${PAGES.TEXT_CREATE}`} className="edit-button">
                Добавить текст
            </Link>
            <h1 className="title">Чтение</h1>
            <p className="notification">Выберите один из текстов</p>
            <div className="grid-list">
                {list && list.map((item) => (
                    <Link className="list-item" key={item.id}
                          to={`${PAGES.READING}/${item.id}`}>
                        <span className="list-item-title">{item.title}</span>
                    </Link>
                ))
                }
            </div>
        </div>
    );
};

export default Reading;
