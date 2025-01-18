import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FreeRecipesComponent } from './free-recipes/free-recipes.component';
import { OrderBooksComponent } from './order-books/order-books.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

// Importing the RecipeService to be provided in the module
import { RecipeService } from './services/recipe.service';
import { FAQComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './products/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    FreeRecipesComponent,
    OrderBooksComponent,
    ContactUsComponent,
    AddRecipeComponent,
    FAQComponent,
    ImageSliderComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecipeService], 
  bootstrap: [AppComponent]
})
export class AppModule {}
