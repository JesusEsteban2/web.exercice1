import { render } from "./base.js";

export function createFooter(selector = "body", position = "afterbegin") {
    const template = /*html*/ `
    <footer>
        <address>CFD San Blas</address>
    </footer>
    `;

    render(selector, position, template);
}
