import loadable from '@loadable/component';
import {create} from "axios";

export const PAGES = {
    HOME: '/',
    READING: '/reading',
    KANJI: '/kanji',
    VOCABULARY_LIST: '/vocabulary_list',
    VOCABULARY_CREATE: '/vocabulary_list/create',
    VOCABULARY_UPDATE: '/vocabulary_list/update/:id',
    VOCABULARY: '/vocabulary/:id',
    GRAMMAR: '/grammar',
    TEXT: '/reading/:id',
    TEXT_CREATE: '/reading/create',
    TEXT_UPDATE: '/reading/update/:id',
    WORD_CREATE: '/word/create/:id',
    WORD_UPDATE: '/word/update/:id',
    WORD: '/word/:id'
};

export const ACCESS = {
    ALL: 'all',
};

export const pages = [
    {
        path: PAGES.HOME,
        component: loadable(() => import('../pages/Home')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.READING,
        component: loadable(() => import('../pages/Reading')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.TEXT,
        component: loadable(() => import('../pages/Text')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.TEXT_CREATE,
        component: loadable(() => import('../pages/TextEditor')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.TEXT_UPDATE,
        component: loadable(() => import('../pages/TextEditor')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.KANJI,
        component: loadable(() => import('../pages/Kanji')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.VOCABULARY_LIST,
        component: loadable(() => import('../pages/VocabularyList')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.VOCABULARY_CREATE,
        component: loadable(() => import('../pages/VocabularyEditor')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.VOCABULARY_UPDATE,
        component: loadable(() => import('../pages/VocabularyEditor')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.VOCABULARY,
        component: loadable(() => import('../pages/Vocabulary')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.GRAMMAR,
        component: loadable(() => import('../pages/Grammar')),
        access: ACCESS.ALL,
    },

    {
        path: PAGES.WORD,
        component: loadable(() => import('../pages/Word')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.WORD_CREATE,
        component: loadable(() => import('../pages/WordEditor')),
        access: ACCESS.ALL,
    },
    {
        path: PAGES.WORD_UPDATE,
        component: loadable(() => import('../pages/WordEditor')),
        access: ACCESS.ALL,
    },

];
