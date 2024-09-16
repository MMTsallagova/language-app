import React, {useEffect, useState} from "react";
import {fetchVocabularyListById, fetchWordListByVId} from "../api/api";
import {Link, useParams} from "react-router-dom";
import {PAGES} from "../routes/routes";

const Vocabulary = () => {
    const [vocabulary, setVocabulary] = useState(null);
    const [words, setWords] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchVocabularyListById(id).then((response) => setVocabulary(response.data))
        fetchWordListByVId(id).then((response) => setWords(response.data))
    }, []);

    return (
        <div className="page_container">
            <Link to={`${(PAGES.WORD_CREATE).replace(':id', id)}`} className="edit-button">
                Добавить слово в список
            </Link>
            <h1 className="title">Слова</h1>
            <p className="notification">Выберите желаемое слово</p>
            <div className="grid-list">
                {words && words.map((item) => (
                    <Link className="list-item" key={item.id}
                          to={`${(PAGES.WORD).replace(':id', item.id)}`}>
                        <span className="list-item-title">{item.word}</span>
                    </Link>
                ))
                }
            </div>
        </div>
    );
};

export default Vocabulary;