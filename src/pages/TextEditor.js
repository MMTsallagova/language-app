import React, {useEffect, useState} from 'react';
import {createText, fetchTextById, updateTextById} from "../api/api";
import {Link, useNavigate, useParams} from "react-router-dom";
import {PAGES} from "../routes/routes";

const TextEditor = () => {

    const [text, setText] = useState({
        title: '',
        text: '',
        note: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchTextById(id).then((response) => setText(response.data));
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {if (id) {
            const info = {
                text: text.text,
                title: text.title,
                note: text.note,
                id: text.id,
            }
            await updateTextById(info); // Отправляем обновленные данные на сервер
            navigate(`/reading/${id}`); // Перенаправляем обратно на страницу чтения
        } else {
            const info = {
                text: text.text,
                title: text.title,
                note: text.note,
            }
            await createText(info); // Отправляем данные на сервер
            navigate(`/reading`); // Перенаправляем обратно на страницу чтения
        }
        } catch (error) {
            console.error('Ошибка при обновлении текста:', error);
        }
    };

    if (!text) {
        return <p>Загрузка...</p>;
    }

    return (
        <div className="page_container">
            <form className="editor_form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <label htmlFor="title">Заголовок:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={text.title}
                        onChange={handleInputChange}
                        className="form_input"
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="text">Текст:</label>
                    <textarea
                        id="text"
                        name="text"
                        value={text.text}
                        onChange={handleInputChange}
                        className="form_textarea"
                        rows="8"
                    ></textarea>
                </div>
                <div className="form_group">
                    <label htmlFor="note">Заметка:</label>
                    <textarea
                        id="note"
                        name="note"
                        value={text.note}
                        onChange={handleInputChange}
                        className="form_textarea"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="submit_button">Сохранить</button>
            </form>
        </div>
    );
};
export default TextEditor;
