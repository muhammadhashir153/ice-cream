import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FreeRecipesComponent } from './free-recipes/free-recipes.component'; 
import { OrderBooksComponent } from './order-books/order-books.component'; // Add OrderBooksComponent
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Set HomeComponent as default route
  { path: 'cart-page', component: CartPageComponent },  // Cart page route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'free-recipes', component: FreeRecipesComponent },
  { path: 'order-books', component: OrderBooksComponent }, // Add OrderBooksComponent route
  { path: 'contact-us', component: ContactUsComponent }, // Add ContactUsComponent route
  { path: 'add-recipe', component: AddRecipeComponent }, // Add AddRecipeComponent route
  { path: 'faqs', component: FAQComponent },  // Add FAQComponent route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
