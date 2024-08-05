import page from '../node_modules/page/page.mjs';

import { renderDashboard } from '../views/dashboard.js';
import { renderLogin } from '../views/login.js';
import { renderRegister } from '../views/register.js';
import { updateNav } from './utils.js';

updateNav();

page('/', renderDashboard);
page('/dashboard', renderDashboard);
page('/login', renderLogin);
page('/register', renderRegister);

page.start();