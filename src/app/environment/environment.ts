export const host = 'http://localhost:3000'

export const api = {
    getAll: '/recipes',
    getOne: (recipeId: string) => `/recipes/${recipeId}`,
}