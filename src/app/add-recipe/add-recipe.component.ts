import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService, Recipe } from '../services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipe: Recipe = {
    id: 0, // We'll generate this in the service
    name: '',
    description: '',
    ingredients: [],
    instructions: '',
    prepTime: 0,
    servings: 0
  };

  constructor(private recipeService: RecipeService, private router: Router) {}

  onSubmit() {
    // Convert ingredients string to array if it's not already
    if (typeof this.recipe.ingredients === 'string') {
      this.recipe.ingredients = (this.recipe.ingredients as string).split('\n').map(item => item.trim()).filter(item => item !== '');
    }
    
    // Generate a new ID (this is a simple approach, you might want to use a more robust method in a real application)
    this.recipe.id = this.recipeService.getFreeRecipes().length + 1;
    
    // Add the recipe to the service
    this.recipeService.addRecipe(this.recipe);

    // Reset the form
    this.recipe = {
      id: 0,
      name: '',
      description: '',
      ingredients: [],
      instructions: '',
      prepTime: 0,
      servings: 0
    };

    // Navigate to the Free Recipes page
    this.router.navigate(['/free-recipes']);
  }
}

