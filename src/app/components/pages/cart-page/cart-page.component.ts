import { Component, OnInit } from '@angular/core';
import { CartServices } from 'src/app/APISERVICES/CartService';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartItems : any[] = [];

  constructor( private cartSer: CartServices) {}

  ngOnInit(): void {
    // Subscribe to the cart observable to keep the cart updated
    this.cartSer.getCartItem().subscribe(
      (res) => {
        this.cartItems = res
      }
    )
  }

  removeFromCart(cartItem: any): void {
    console.log(cartItem);
  }

  changeQuantity(cartItem: any, quantityInString: string): void {
    console.log(cartItem + quantityInString)
  }
}
