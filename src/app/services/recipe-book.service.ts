import { Injectable } from '@angular/core';

interface RecipeBook {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  private recipeBooks: RecipeBook[] = [
    {
      id: 1,
      title: "Ice Cream Delights",
      description: "A collection of 50 delicious ice cream recipes for all seasons.",
      price: 24.99,
      imageUrl: '/assets/01.jpg'
    },
    {
      id: 2,
      title: "Gelato Perfection",
      description: "Master the art of Italian gelato with these authentic recipes.",
      price: 29.99,
      imageUrl: '/assets/02.jpg'
    },
    {
      id: 3,
      title: "Vegan Ice Cream Revolution",
      description: "Discover dairy-free ice cream recipes that are creamy and delicious.",
      price: 22.99,
      imageUrl: '/assets/03.jpg'
    },
    {
      id: 4,
      title: "Ice Cream Truck Classics",
      description: "Recreate your favorite childhood ice cream truck treats at home.",
      price: 19.99,
      imageUrl: '/assets/04.jpg'
    }
  ];

  getRecipeBooks(): RecipeBook[] {
    return this.recipeBooks;
  }
}
