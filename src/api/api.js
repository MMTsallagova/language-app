import axios from "axios";

const BASE_URL = 'http://lang.api/api/';

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});

export const fetchTextList = () => $api.get('text')

export const fetchTextById = (id) => $api.get('text/get/' + id)

export const updateTextById = (params) => $api.post('text/update', params)
export const createText = (params) => $api.post('text/create', params)
export const createVocabularyList = (params) => $api.post('vocabulary_list/create', params)
export const updateVocabularyListById = (params) => $api.post('vocabulary_list/update', params)

export const fetchVocabularyList = () => $api.get('vocabulary_list')
export const fetchVocabularyListById = (id) => $api.get('vocabulary_list/get/' + id)

export const fetchWordListByVId = (id) => $api.get('wordById/' + id)


export const createWord = (params) => $api.post('word/create', params)
export const updateWordById = (params) => $api.post('word/update', params)

export const fetchWord = () => $api.get('word')
export const fetchWordById = (id) => $api.get('word/get/' + id)

