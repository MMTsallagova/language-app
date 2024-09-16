import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {fetchWordById} from "../api/api";
import {PAGES} from "../routes/routes";

const Word = () => {

    const [word, setWord] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchWordById(id).then((response) => setWord(response.data))
    }, []);

    if (!word) {
        return (<></>);
    }

    console.log(word)
    return (
        <div className="page_container">
            <Link to={`${PAGES.WORD_UPDATE.replace(':id', word.id)}`} className="edit-button">
                Редактировать
            </Link>
            <div className="content_container">
                <span className="content_title">{word.word}</span>
                <span className="content_main">{word.furigana}</span>
                <span className="content_note">{word.translate}</span>
                <span className="content_note">{word.description}</span>
            </div>
        </div>
    );
};

export default Word;
