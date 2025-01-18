import { Component, OnInit } from '@angular/core';
import { RecipeService, Recipe } from '../services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-free-recipes',
  templateUrl: './free-recipes.component.html',
  styleUrls: ['./free-recipes.component.css']
})
export class FreeRecipesComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.recipes$;
  }

  ngOnInit() {}

  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id);
  }
}

