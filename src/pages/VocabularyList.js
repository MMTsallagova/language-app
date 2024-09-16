import React, {useEffect, useState} from 'react';
import {fetchVocabularyList} from "../api/api";
import {Link} from "react-router-dom";
import {PAGES} from "../routes/routes";

const VocabularyList = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        fetchVocabularyList().then((response) => setList(response.data))
    }, []);


    return (
        <div className="page_container">
        <Link to={`${PAGES.VOCABULARY_CREATE}`} className="edit-button">
        Добавить список слов
    </Link>
    <h1 className="title">Словарь</h1>
    <p className="notification">Выберите желаемый словарь</p>
    <div className="grid-list">
        {list && list.map((item) => (
            <Link className="list-item" key={item.id}
                  to={`${(PAGES.VOCABULARY).replace(':id', item.id)}`}>
                <span className="list-item-title">{item.title}</span>
            </Link>
        ))
        }
    </div>
</div>
    );
};

export default VocabularyList;
