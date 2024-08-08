import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { setUserData, submitHandler } from '../util/utility.js';

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Login</h2>
        <form class="login-form" @submit="${submitHandler(onLogin)}">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`;

export const loginView = (ctx) => {
    const onLogin = (data, form) => {
        const { email, password } = data;

        if (!email || !password) {
            return alert('All fields are required');
        }

        authService.login({ email, password })
            .then(userData => {
                if (userData) {
                    setUserData(userData);
                    ctx.page.redirect('/');
                }
            })

    }

    ctx.render(loginTemplate(onLogin));
}