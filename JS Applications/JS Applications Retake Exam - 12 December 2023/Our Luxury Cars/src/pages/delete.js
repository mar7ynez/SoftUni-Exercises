import * as cardService from '../services/cardService.js';

export const deleteHandler = (ctx) => {
    if (confirm('Are you sure?')) {
        cardService.del(ctx.params.carId)
            .then(() => ctx.page.redirect('/dashboard'));
    }
}