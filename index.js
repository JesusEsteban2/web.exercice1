import { createHeader } from './header.js';
import { tttGame } from './ttt.js';

console.log('Index loaded');

// function greeting() {

// const question = '¿Como te llamas?'
//     const userName = prompt(question)
//     if(userName === null || userName === '')  return
//     const response = `Hola, ${userName}, que tal estas`
//     alert(response)

//     // if(userName !== null) {
//     //     const response = `Hola, ${userName}, que tal estas`
//     //     alert(response)
//     // }
// }

// const button = document.querySelector('form button')
// button.addEventListener('click', greeting)

function checkDOM(params) {
  // El DOM como "árbol" de objetos
  console.dir(document);

  // Acceso secuencial a cualquier nodo
  console.dir(document.children[0].children[1].children[0].children[1]);

  // Acceso directo buscando un nodo: API selectors
  const headerElement = document.querySelector('header');
  console.dir(headerElement.querySelectorAll('img'));

  document.querySelector('#header1');
  document.querySelectorAll('p');
  document.querySelectorAll('.basic');
  document.querySelectorAll('[name="valor de name"]');
  document.querySelector('article>p.header');

  // Acceso directo "previo"
  document.getElementById('header1');
  document.getElementsByTagName('p');
  document.getElementsByClassName('basic');
  document.getElementsByName('valor de name');
}

const title = 'Juegos';
document.querySelector('header').outerHTML = createHeader(title);

tttGame();

function isWinner(posPlayer = '') {
  const optionWinner = ['123', '456', '789', '147', '258', '369', '159', '357'];

  for (let index = 0; index < optionWinner.length; index++) {
    const item = optionWinner[index];
    if (
      posPlayer.includes(item.at(0)) &&
      posPlayer.includes(item.at(1)) &&
      posPlayer.includes(item.at(2))
    ) {
      return true;
    }
  }
  return false;
}
// document.querySelector('header').innerHTML = createHeader(title);
// document.querySelector('header').outerHTML = createHeader(title);
// document.querySelector('header').insertAdjacentHTML ('afterBegin',title);

console.log(isWinner('1789')); //True
console.log(isWinner('12468')); //fase
console.log(isWinner('321')); //True
console.log(isWinner('12469')); //fase
