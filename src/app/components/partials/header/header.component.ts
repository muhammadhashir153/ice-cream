import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/authService/authService';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogedIn: boolean = false;
  cartQuantity=0;
  constructor(cartService:CartService, private route:Router, private authService: AuthService) {
    // cartService.getCartObservable().subscribe((newCart: any) => {
    //   this.cartQuantity = newCart.totalCount;
    // })
   }

  ngOnInit(): void {
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isLogedIn = isAdmin;
    });
  }

  logout(): void{
    this.authService.logout();
    this.route.navigate(['login']);
  }
}
