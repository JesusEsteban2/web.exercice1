import { loadAbout } from './about.js';
import { loadPorfolio } from './porfolio.js';

function render(selector, position, template) {
  const validPositions = ['afterbegin', 'afterend', 'beforebegin', 'beforeend'];

  if (!validPositions.includes(position)) return;

  const target = document[selector];

  target.insertAdjacentHTML(position, template);

  const newReference = target.firstElementChild;

  // Puede ser target.firstElementChild, target.lastElementChild, target.previousElementSibling,
  // target.nextElementSibling, en función de como se haya insertado.

  return newReference;
}

function createHeader(selector = 'body', position = 'afterbegin') {
  let path = location.pathname.split('/').at(-1).split('.').at(0);
  if (path === '') path = 'index';

  const pathCapitalized = path.charAt(0).toUpperCase() + path.slice(1);

  const headerTemplate = `
<header>
        <h1>${pathCapitalized} - Router</h1>
        <nav>
            <ul>
                <li>
                    <a href="/index.html">Inicio</a>
                </li>
                <li>
                    <a href="/porfolio.html">Portfolio</a>
                </li>
                <li>
                    <a href="/about.html">About</a>
                </li>
            </ul>
        </nav>
    </header>
`;
  render(selector, position, headerTemplate);
}

createHeader('body', 'afterbegin');
console.log('main loaded');
console.log(location.pathname);

loadAbout();
loadPorfolio();
