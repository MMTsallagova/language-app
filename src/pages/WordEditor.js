import React, {useEffect, useState} from 'react';
import {
    createText,
    createWord,
    fetchTextById,
    fetchVocabularyList,
    fetchWordById,
    updateTextById,
    updateWordById
} from "../api/api";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {PAGES} from "../routes/routes";

const WordEditor = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation(); // Получаем информацию о текущем маршруте
    const isUpdate = location.pathname.includes('update');
    const [word, setWord] = useState({
        word: '',
        furigana: '',
        translate: '',
        description: '',
        vocabulary_id: id ?? '',
    });

    const [vocabularies, setVocabularies] = useState([]);


    useEffect(() => {
        fetchVocabularyList().then((response) => {
            const set = [];
            response.data.forEach((item) => {
                set.push({
                    id: item.id,
                    label: item.title
                })
            })
            setVocabularies(set);
        })
    }, []);

    useEffect(() => {
        if (isUpdate && id) {
            fetchWordById(id).then((response) => setWord(response.data));
        }
    }, [id]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setWord({
            ...word,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isUpdate) {
                const info = {
                    word: word.word,
                    furigana: word.furigana,
                    translate: word.translate,
                    description: word.description,
                    id: word.id,
                    vocabulary_id: word.vocabulary_id,
                }
                await updateWordById(info); // Отправляем обновленные данные на сервер
                navigate(`/word/${id}`); // Перенаправляем обратно на страницу чтения
            } else {
                const info = {
                    word: word.word,
                    furigana: word.furigana,
                    translate: word.translate,
                    description: word.description,
                    vocabulary_id: word.vocabulary_id,
                }
                await createWord(info); // Отправляем данные на сервер
                navigate(`/vocabulary/${word.vocabulary_id}`); // Перенаправляем обратно на страницу чтения
            }
        } catch (error) {
            console.error('Ошибка при обновлении слова:', error);
        }
    };

    if (!word) {
        return <p>Загрузка...</p>;
    }
    console.log(word)

    return (
        <div className="page_container">
            <form className="editor_form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <label htmlFor="word">Слово:</label>
                    <input
                        type="text"
                        id="word"
                        name="word"
                        value={word.word}
                        onChange={handleInputChange}
                        className="form_input"
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="furigana">Чтение:</label>
                    <textarea
                        id="furigana"
                        name="furigana"
                        value={word.furigana}
                        onChange={handleInputChange}
                        className="form_textarea"
                        rows="8"
                    ></textarea>
                </div>
                <div className="form_group">
                    <label htmlFor="translate">Перевод:</label>
                    <textarea
                        id="translate"
                        name="translate"
                        value={word.translate}
                        onChange={handleInputChange}
                        className="form_textarea"
                        rows="4"
                    ></textarea>
                </div>
                <div className="form_group">
                    <label htmlFor="description">Пример использования:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={word.description}
                        onChange={handleInputChange}
                        className="form_textarea"
                        rows="4"
                    ></textarea>
                </div>
                <div className="form_group">
                    <select
                        className="form_select"
                        name="vocabulary_id"
                        id="vocabulary_id"
                        value={word.vocabulary_id}
                        onChange={handleInputChange}
                    >
                        <option value=''></option>
                        {vocabularies.map(({id, label}) => <option key={id} value={id}> {label} </option>)}
                    </select>
                </div>
                <button type="submit" className="submit_button">Сохранить</button>
            </form>
        </div>
    );
};
export default WordEditor;
