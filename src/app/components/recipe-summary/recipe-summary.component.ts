import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {

  @Input()
  recipe: Recipe;

  @Output() zoomIn: EventEmitter<Recipe> = new EventEmitter();
  @Output() userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public userClicked() {
    this.userClick.emit(this.recipe.id);
  }
}
