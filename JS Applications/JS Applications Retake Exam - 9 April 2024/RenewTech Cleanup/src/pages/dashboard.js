import { html } from '../../node_modules/lit-html/lit-html.js';
import * as solutionService from '../services/solutionService.js';

const solutionTemplate = (solution) => html`
<div class="solution">
    <img src="${solution.imageUrl}" alt="example1" />
    <div class="solution-info">
        <h3 class="type">${solution.type}</h3>
        <p class="description">${solution.description}</p>
        <a class="details-btn" href="/details/${solution._id}">Learn More</a>
    </div>
</div>
`

const dashboardTemplate = (solutions) => html`
<h2>Solutions</h2>
<section id="solutions">
    ${solutions.length
        ? solutions.map(solution => solutionTemplate(solution))
        : html`<h2 id="no-solution">No Solutions Added.</h2>`
    }
</section>
`;

export const dashboardView = (ctx) => {
    solutionService.getAll()
        .then(solutions => {
            ctx.render(dashboardTemplate(solutions))
        })
}