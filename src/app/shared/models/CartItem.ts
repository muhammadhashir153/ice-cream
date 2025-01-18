// src/app/shared/models/CartItem.ts

import { Food } from './Food';
import { RecipeBook } from './RecipeBook'; // Ensure the path is correct

export class CartItem {
  quantity: number;
  price: number;
  food?: Food;
  recipeBook?: RecipeBook;

  constructor(item: Food | RecipeBook) {
    if ('title' in item) {
      this.recipeBook = item as RecipeBook;
      this.price = this.recipeBook.price;
    } else {
      this.food = item as Food;
      this.price = this.food.price;
    }
    this.quantity = 1;
  }
}
