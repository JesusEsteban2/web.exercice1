// function greeting() {

// const question = '¿Como te llamas?'
// const userName = prompt(question)
// if(userName === null || userName === '') return
// const response = `Hola, ${userName}, que tal estas`
// alert(response)

// // if(userName !== null) {
// // const response = `Hola, ${userName}, que tal estas`
// // alert(response)
// // }
// }

// const button = document.querySelector('form button')
// button.addEventListener('click', greeting)

// document.querySelector('#header1');
// document.querySelectorAll('p');
// document.querySelectorAll('.basic');
// document.querySelectorAll('[name="valor de name"]');
// document.querySelector('article>p.header');

// // Acceso directo "previo"
// document.getElementById('header1');
// document.getElementsByTagName('p');
// document.getElementsByClassName('basic');
// document.getElementsByName('valor de name');

// document.querySelector('header').innerHTML = createHeader(title);
// document.querySelector('header').outerHTML = createHeader(title);
// document.querySelector('header').insertAdjacentHTML ('afterBegin',title);

// function checkDOM(params) {
// // El DOM como "árbol" de objetos
// console.dir(document);

// // Acceso secuencial a cualquier nodo
// console.dir(document.children[0].children[1].children[0].children[1]);

// // Acceso directo buscando un nodo: API selectors
// const headerElement = document.querySelector('header');
// console.dir(headerElement.querySelectorAll('img'));
// }

# API REST

http (Metodos) -> datos (Crud)

jsonplaceholder (https://jsonplaceholder.typicode.com/)

Instalar json-server

1. Crear carpeta en el proyecto (json-server)
2. instalar (npm install json-server)
3. Crear archivo de ejemplo con algún dato de prueba (db.json)
4. ejecutar servidor ($ npx json-server db.json)

Extension VSC (Thunder Client) para manejo de HTML y json

C->Post
R->Get
U->Put/Patch
D->Delete
