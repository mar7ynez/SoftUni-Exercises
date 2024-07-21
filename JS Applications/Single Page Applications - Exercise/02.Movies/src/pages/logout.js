import { updateNav } from "../nav.js";
import { renderLogin } from "./login.js";

function renderLogout() {
    localStorage.clear();
    updateNav();
    renderLogin();
}

export { renderLogout };