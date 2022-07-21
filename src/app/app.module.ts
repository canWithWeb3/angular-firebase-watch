import { UserService } from 'src/app/services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { CategoryService } from './services/category.service';
import { AddMovieComponent } from './admin/movie/add-movie/add-movie.component';
import { MovieService } from './services/movie.service';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminCategoriesComponent } from './admin/category/admin-categories/admin-categories.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { EditMovieComponent } from './admin/movie/edit-movie/edit-movie.component';
import { AdminMoviesComponent } from './admin/movie/admin-movies/admin-movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent,
    AddCategoryComponent,
    AddMovieComponent,
    RegisterComponent,
    LoginComponent,
    AdminCategoriesComponent,
    EditCategoryComponent,
    EditMovieComponent,
    AdminMoviesComponent,
    NotFoundComponent,
    MovieDetailComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    MovieService,
    UserService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
