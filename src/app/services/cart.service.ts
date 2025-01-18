import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';
import { RecipeBook } from '../shared/models/RecipeBook';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: Food | RecipeBook): void {
    const itemId = Number(item.id); // Ensure id is a number

    // Check if the item is already in the cart
    const existingItem = this.cartItems.find(
      (cartItem) =>
        Number(cartItem.food?.id) === itemId || Number(cartItem.recipeBook?.id) === itemId
    );

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price = existingItem.quantity * (existingItem.food?.price || existingItem.recipeBook?.price || 0);
    } else {
      const newItem = new CartItem(item);
      newItem.quantity = 1;
      newItem.price = item.price || 0;
      this.cartItems.push(newItem);
    }

    // Update cart observable
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(
      (cartItem) =>
        Number(cartItem.food?.id) !== itemId && Number(cartItem.recipeBook?.id) !== itemId
    );
    this.cartItemsSubject.next(this.cartItems);
  }

  changeQuantity(itemId: number, quantity: number): void {
    const cartItem = this.cartItems.find(
      (cartItem) =>
        Number(cartItem.food?.id) === itemId || Number(cartItem.recipeBook?.id) === itemId
    );

    if (cartItem && quantity > 0) {
      cartItem.quantity = quantity;
      cartItem.price = cartItem.quantity * (cartItem.food?.price || cartItem.recipeBook?.price || 0);
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // New utility methods
  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartSize(): number {
    return this.cartItems.reduce((size, item) => size + item.quantity, 0);
  }
}
