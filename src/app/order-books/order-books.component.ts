// src/app/order-books/order-books.component.ts

import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from '../services/recipe-book.service'; // Make sure this service is working
import { CartService } from '../services/cart.service'; // Cart service is already updated

// Define the interface for RecipeBook
interface RecipeBook {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-order-books',
  templateUrl: './order-books.component.html',
  styleUrls: ['./order-books.component.css']
})
export class OrderBooksComponent implements OnInit {
  recipeBooks: RecipeBook[] = [];  // This will hold the list of recipe books

  // Injecting RecipeBookService and CartService into the constructor
  constructor(
    private recipeBookService: RecipeBookService,
    private cartService: CartService
  ) {}

  // On initialization, fetching the recipe books from the service
  ngOnInit(): void {
    this.recipeBooks = this.recipeBookService.getRecipeBooks();  // Fetch recipe books data from the service
  }

  // Adding recipe book to the cart and showing an alert
  addToCart(book: RecipeBook): void {
    this.cartService.addToCart(book);  // Add to cart using the updated CartService
    alert(`${book.title} has been added to your cart!`);  // Display confirmation alert
  }
}
