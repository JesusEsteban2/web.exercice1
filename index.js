import { createHeader } from './header.js';
import { tttGame } from './ttt.js';

const title = 'Juegos';
document.querySelector('header').outerHTML = createHeader(title);

tttGame();
