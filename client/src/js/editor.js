// Importing approaches to save and obatin data information from the indexedDB database application
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
    constructor() {
        const localData = localStorage.getItem('content');

// Analyse if CodeMirror is working
        if (typeof CodeMirror === 'undefined') {
            throw new Error('CodeMirror is not loaded');
        }

        this.editor = CodeMirror(document.querySelector('#main'), {
            value: '',
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            indentUnit: 2,
            tabSize: 2,
        });