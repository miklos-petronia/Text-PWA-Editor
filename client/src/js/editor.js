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

        // When the editor is accessible, set the value which is gathered in indexeddb and Fall back to localStorage  and set the value to header if nothing is stored in indexeddb or is available.
        getDb().then((data) => {
            console.info('Loaded data from IndexedDB, injecting into editor');
            this.editor.setValue(data || localData || header);
        });

        this.editor.on('change', () => {
            localStorage.setItem('content', this.editor.getValue());
        });