import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions?: string;
  prepTime?: number;
  servings?: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private freeRecipes: Recipe[] = [
    {
      id: 1,
      name: 'Classic Vanilla Ice Cream',
      description: 'A simple and delicious vanilla ice cream recipe.',
      ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup sugar', '1 tsp vanilla extract'],
      instructions: 'Mix all ingredients and churn in an ice cream maker.',
      prepTime: 15,
      servings: 4
    },
    {
      id: 2,
      name: 'Chocolate Chip Ice Cream',
      description: 'Creamy vanilla ice cream loaded with chocolate chips.',
      ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup sugar', '1 tsp vanilla extract', '1 cup chocolate chips'],
      instructions: 'Mix ingredients, fold in chocolate chips, and churn.',
      prepTime: 20,
      servings: 4
    },
    {
      id: 3,
      name: 'Strawberry Swirl Ice Cream',
      description: 'Vanilla ice cream with a fresh strawberry swirl.',
      ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup sugar', '1 tsp vanilla extract', '1 cup fresh strawberries', '1/4 cup sugar'],
      instructions: 'Blend strawberries with sugar and swirl into churned vanilla ice cream.',
      prepTime: 25,
      servings: 4
    }
  ];

  private recipesSubject = new BehaviorSubject<Recipe[]>(this.freeRecipes);
  recipes$ = this.recipesSubject.asObservable();

  constructor() {}

  getFreeRecipes(): Recipe[] {
    return this.recipesSubject.value;
  }

  addRecipe(recipe: Recipe): void {
    const updatedRecipes = [...this.recipesSubject.value, recipe];
    this.recipesSubject.next(updatedRecipes);
  }

  deleteRecipe(id: number): void {
    const updatedRecipes = this.recipesSubject.value.filter(recipe => recipe.id !== id);
    this.recipesSubject.next(updatedRecipes);
  }
}

