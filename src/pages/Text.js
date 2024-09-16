import React, {useEffect, useState} from 'react';
import {fetchTextById} from "../api/api";
import {Link, useParams} from "react-router-dom";
import {PAGES} from "../routes/routes";

const Text = () => {

    const [text, setText] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchTextById(id).then((response) => setText(response.data))
    }, []);

    if (!text) {
        return (<></>);
    }

    return (
        <div className="page_container">
            <Link to={`${PAGES.TEXT_UPDATE.replace(':id', text.id)}`} className="edit-button">
                Редактировать
            </Link>
            <div className="content_container">
                <span className="content_title">{text.title}</span>
                <span className="content_main">{text.text}</span>
                <span className="content_note">{text.note}</span>
            </div>
        </div>
    );
};

export default Text;
