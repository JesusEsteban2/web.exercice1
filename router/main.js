import { createHeader } from "./components/header.js";
import { loadAbout } from "./about/about.js";
import { createFooter } from "./components/footer.js";
import { createMenu } from "./components/menu.js";
import { loadPorfolio } from "./porfolio/porfolio.js";
import { loadTask } from "./task/task.js";

function loadIndex() {
    const menuOptions = [
        { path: "/index.html", label: "Inicio" },
        { path: "/porfolio/porfolio.html", label: "Porfolio" },
        { path: "/about/about.html", label: "Acerca de" },
        { path: "/task/task.html", label: "Task" },
    ];

    let page = location.pathname.split("/").at(-1).split(".").at(0);
    page = page || "index";

    const router = {
        porfolio: loadPorfolio,
        about: loadAbout,
        index: createHeader,
        task: loadTask,
    };
    router[page](page);
    createMenu(menuOptions, "header", "beforeend");
    createFooter("body", "beforeend");
}

loadIndex();
