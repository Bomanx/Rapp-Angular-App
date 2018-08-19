import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  currentClasses: any;
  fontSize: string;
  recipes: Recipe[];
  recipesLoaded: boolean;
  loadError: boolean;
  errorText: string;

  constructor(private router: Router, private recipeService: RecipeService) {
    this.currentClasses = { 'darkbg': false };
    this.fontSize = '300%';
  }

  ngOnInit() {
    // Use RecipeService to get list of recipes
    this.recipeService.getAllRecipes()
      .then((recipes) => {
        this.recipes = recipes;
        this.recipesLoaded = true;
      })
      .catch((err) => {
        this.loadError = true;
        const body = JSON.parse(err._body);
        this.errorText = body.message;
      });
  }

  // Redirects to a given recipe.  Redirect is based on id
  // which is fetched from recipe-list.component.ts
  public userClickedOnRecipe(recipe_id) {
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  // Toggles background between dark and light
  public toggleBackground(): void {
    const newValue = !this.currentClasses['darkbg'];
    this.currentClasses = { 'darkbg': newValue };
  }

  // Changes font size of the main header on the page
  // tbh, it doesn't serve any practical purpose
  public toggleFontSize(): void {
    if (this.fontSize === '300%') {
      this.fontSize = '400%';
    } else {
      this.fontSize = '300%';
    }
  }

  // Redirects to New Recipe page
  public addNewRecipePressed(): void {
    this.router.navigateByUrl('/newrecipe');
  }
}
