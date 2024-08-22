import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
    <section id="home">
        <div id="home-wrapper">
          <p id="home-intro">
            Whether you're a seasoned artist, a collector of ink, or someone
            looking for inspiration for their first tattoo,
            <span>Tattoo Masters</span> is your community. Share your
            masterpieces, discover incredible designs, and connect with
            artists and aficionados from around the world.
          </p>
          <a href="/register" id='join-us'>Join Us!</a>
        </div>
    </section>
`;

export const renderHome = (ctx) => {
    ctx.render(homeTemplate());
}