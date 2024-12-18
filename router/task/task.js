import {TASKS} from './Data/'
import { createHeader } from "../components/header.js";

export function loadTask() {
    const pageTitle = "Tareas";
    createHeader(pageTitle);
    const task = getTaskList();




    function getTaskList() {
        TASKS=JSON.parse(./)
    }
}
