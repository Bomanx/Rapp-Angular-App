import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { ActivatedRoute, ParamMap } from '../../../../node_modules/@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  loadError: boolean;
  errorText: string;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private recipeService: RecipeService) {

    this.loadError = false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipe_id = parseInt(params.get('recipe_id'), 10);
      this.recipeService.getRecipeById(recipe_id)
          .then((recipe) => this.recipe = recipe)
          .catch((err) => {
            this.loadError = true;
            const body = JSON.parse(err._body);
            this.errorText = body.message;
          });
    });
  }

  // Goes back to the recipe-list page
  goBackButtonPressed(): void {
    this.location.back();
  }

}
