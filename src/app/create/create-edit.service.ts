import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api, host } from "../environment/environment";
import { Recipe } from "../types/recipe";

@Injectable()

export class CreateEditService {
    constructor(private http: HttpClient) { }

    getOne(recipeId: string) {
        return this.http.get<Recipe>(`${host}${api.getOne(recipeId)}`);
    }

    edit(updatedRecipe: Recipe, recipeId: string) {
        return this.http.put<Recipe>(`${host}${api.getOne(recipeId)}`, updatedRecipe);
    }

    create(recipeData: Recipe) {
        return this.http.post<Recipe>(`${host}${api.getAll}`, recipeData);
    }
}