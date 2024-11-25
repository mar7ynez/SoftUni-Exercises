import { HttpClient } from "@angular/common/http";
import { api, host } from "../environment/environment";
import { Injectable } from "@angular/core";
import { Recipe } from "../types/recipe";

@Injectable()

export class CatalogService {
    constructor(private http: HttpClient) { }

    getRecipes() {
        return this.http.get<Recipe[]>(`${host}${api.getAll}`);
    }

    getOne(recipeId: string) {
        return this.http.get<Recipe>(`${host}${api.getOne(recipeId)}`);
    }
}