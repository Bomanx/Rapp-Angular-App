import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '../../../../node_modules/@angular/router';

import { Recipe, Ingredient, Instruction } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipeInProgress: Recipe;


  constructor(private location: Location,
              private recipeService: RecipeService,
              private router: Router) {
    this.recipeInProgress = Recipe.createBlankRecipe();
  }

  ngOnInit() {
  }

  // Adds the current Recipe input to the list of recipes
  public addRecipeClicked() {
    this.recipeService.addNewRecipe(this.recipeInProgress)
      .then((recipe) => {
        this.router.navigate(['recipes', recipe.id]);
      });
  }

  // Adds a field for a new ingredient to be added
  addIngredientPressed(): void {
    if (!this.recipeInProgress) {
      this.recipeInProgress.ingredients = [{ ingredient: null, measure: null }];
    } else {
      this.recipeInProgress.ingredients.push({ ingredient: null, measure: null });
    }
  }

  // Removes an ingredient field and removes from the recipe.ingredients[] array
  removeIngredientAtIndex(index: number) {
    this.recipeInProgress.ingredients.splice(index, 1);
  }

  // Adds a field for a new instruction to be added
  addInstructionPressed(index: number) {
    if (!this.recipeInProgress) {
      this.recipeInProgress.instructions = [{ instruction: null, photo: null }];
    } else {
      this.recipeInProgress.instructions.push({ instruction: null, photo: null });
    }
  }

  // Removes an instruction field and removes from recipe.instructions[] array
  removeInstructionAtIndex(index: number) {
    this.recipeInProgress.instructions.splice(index, 1);
  }

  // Goes back to the recipe-list page
  goBackButtonPressed(): void {
    this.location.back();
  }
}
