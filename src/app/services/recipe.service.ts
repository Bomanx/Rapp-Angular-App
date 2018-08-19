import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { Recipe } from '../models/recipe';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[];

  // tslint:disable:max-line-length
  constructor(private http: Http) {
  }

  // Service function which returns a list of all recipes
  // Timeout function is for simulating network latency
  getAllRecipes(): Promise<Recipe[]> {
    return this.http
        .get(RECIPE_SERVER + '/v1/recipes.json')
        .toPromise().then(response => response.json().data as Recipe[])
        .catch(this.handleError);
  }

  // Searches for a recipe with a specified id and returns
  // If not found throw and error
  getRecipeById(recipe_id: number): Promise<Recipe> {
    return this.http
        .get(RECIPE_SERVER + `/v1/recipes/${recipe_id}.json`)
        .toPromise()
        .then(response => response.json().data as Recipe)
        .catch(this.handleError);
  }

  // Adds recipe to the recipe list
  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http
        .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
        .toPromise()
        .then(response => response.json().data as Recipe)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('ERROR OCCURRED TALKING TO SERVER:' + error);
    return Promise.reject(error.message || error);
  }
}
