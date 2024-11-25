import { html } from '../../node_modules/lit-html/lit-html.js';

const guestNav = () => html`
      <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
`
const userNav = () => html`
      <div class="user">
        <a href="/create">Add Solution</a>
        <a href="/logout">Logout</a>
      </div>
`

const navigationTemplate = (isUser) => html`
    <a id="logo" href="/"><img id="logo-img" src="./images/logo2.png" alt="logo" />
    </a>
    <nav>
      <div>
        <a href="/dashboard">Solutions</a>
      </div>
      ${isUser ? userNav() : guestNav()}
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}