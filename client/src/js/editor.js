// Importing approaches to save and obatin data information from the indexedDB database application
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
    constructor() {
        const localData = localStorage.getItem('content');