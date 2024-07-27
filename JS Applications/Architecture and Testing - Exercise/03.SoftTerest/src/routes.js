import { renderDashboard } from "./pages/dashboard.js";
import { renderHome } from "./pages/home.js";
import { renderLogin } from "./pages/login.js";
import { renderRegister } from "./pages/register.js";
// import { hideContent } from "./utils.js"

const routes = {
    '/': renderHome,
    '/dashboard': renderDashboard,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': () => console.log('Create'),
    '/logout': () => console.log('logout')
}

// function router(pathname) {
//     hideContent();

//     const viewRenderer = routes[pathname];

//     viewRenderer();
// }

export { routes };