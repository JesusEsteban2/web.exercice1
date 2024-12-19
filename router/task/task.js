import TASKS from '../Data/task.json' with {type:'json'};

import { render } from '../components/base.js';
import { createHeader } from "../components/header.js";


export function loadTask() {
    const pageTitle = "Tareas";
    createHeader(pageTitle);
    const tasks = getTaskList();
    
    createTaskCards(tasks)
    tasks.forEach((element)=>{createCard(element,element)});




    function getTaskList() {
        return TASKS;
    }

    function createCard(
        task,
        deleteCard,
        selector = 'ul',
        position = "afterbegin"
    ) {
        const checked= task.isDone ? 'checked' : '';

        const template = /*html*/ `
            <li>
                <div class="card">
                <hgroup title=${task.id}>
                    <h3>${task.title}</h3>
                    <label>
                    <input type="checkbox" 
                        name="isDone" title="completada" ${checked}>
                    </label>
                </hgroup>
                <p>Responsable: <span>${task.owner}</span></p>
                <p>Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum, ullam rem sint
                    aliquam quo, in eius ipsum fugiat esse fugit necessitatibus? Non quo dolor fugit assumenda et rem deserunt.
                </p>
                <button>Borrar</button>
                </div>
            </li>
            `;


        const element = render(selector, position, template);
    
        const button = element.querySelector('button');
        button.addEventListener('click', () => {
            console.log(task);
            deleteCard(task);
        });

        task.htmlElement=element;
        console.dir(task);
    }

    function createTaskCards(
        tasks,
        selector = 'header',
        position = 'afterend'
    ) {
        const template = /*html*/ `
        <ul class="cards">
        </ul>
        `;
        render(selector,position,template)
        //const element = extendedRender();
    }
        
    function deleteCard(task) {
            console.log(task.id);
            const index = tasks.findIndex((item) => item.id === task.id);
            tasks.splice(index, 1);
    }
    
    function updateCard(updatedTask) {
            const id = updatedTask.id;
            const index = tasks.findIndex((item) => item.id === id);
            tasks[index] = {
                ...tasks[index],
                ...updatedTask,
            };
     }
    
    function addCard(task) {
            task.id = task.id || crypto.randomUUID.split('-')[0];
            tasks.push(task);
    }
    
    function createAddTask(
        addTask,
        selector = 'body',
        position = 'beforeend'
    ) {
        const template = /*html*/ `
         <form>
            <label>
              <span>Título</span>
              <input type="text" name="title" required>
            </label>
            <label>
              <span>Responsable</span>
              <input type="text" name="owner">
            </label>
            <button type="submit">Crear</button>
          </form>
        
        `;
        
        const element = render(selector, position, template);
        element.addEventListener('submit', handleSubmit);
    
        return element;

    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const newTask = {
            ...data,
            id: crypto.randomUUID().split('-')[0],
            isDone: false,
        };
        console.log(newTask);
        addTask(newTask);
    }

}
