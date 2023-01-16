import AwesomeBooks from './modules/books.js';
import { addEventListerers } from './modules/event_listeners.js';
import { DateTime } from './modules/luxon.js';

const awesomeBooks = new AwesomeBooks([]);
addEventListerers(awesomeBooks, DateTime);