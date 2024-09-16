import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {createText, createVocabularyList, fetchTextById, updateTextById, updateVocabularyListById} from "../api/api";

const VocabularyEditor = () => {

    const [title, setTitle] = useState({
        title: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchTextById(id).then((response) => setTitle(response.data));
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTitle({
            ...title,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {if (id) {
            const info = {
                title: title.title,
                id: title.id,
            }
            await updateVocabularyListById(info); // Отправляем обновленные данные на сервер
            navigate(`/vocabulary_list/${id}`); // Перенаправляем обратно на страницу
        } else {
            const info = {
                title: title.title,
            }
            await createVocabularyList(info); // Отправляем данные на сервер
            navigate(`/vocabulary_list`); // Перенаправляем обратно на страницу
        }
        } catch (error) {
            console.error('Ошибка при обновлении текста:', error);
        }
    };

    if (!title) {
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
                        value={title.title}
                        onChange={handleInputChange}
                        className="form_input"
                    />
                </div>
                <button type="submit" className="submit_button">Сохранить</button>
            </form>
        </div>
    );
};
export default VocabularyEditor;