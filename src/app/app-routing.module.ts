import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './admin/movie/add-movie/add-movie.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminCategoriesComponent } from './admin/category/admin-categories/admin-categories.component';
import { AdminMoviesComponent } from './admin/movie/admin-movies/admin-movies.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditMovieComponent } from './admin/movie/edit-movie/edit-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path:"movies", component: MoviesComponent },
  { path:"movies/movie/:movieId", component: MovieDetailComponent },
  { path:"movies/category/:categoryId", component: MoviesComponent },
  { path:"kayit-ol", component: RegisterComponent },
  { path:"giris-yap", component: LoginComponent },
  { path:"admin/category", component: AdminCategoriesComponent },
  { path:"admin/category/add-category", component: AddCategoryComponent },
  { path:"admin/category/edit-category/:categoryId", component: EditCategoryComponent },
  { path:"admin/movie", component: AdminMoviesComponent },
  { path:"admin/movie/add-movie", component: AddMovieComponent },
  { path:"admin/movie/edit-movie/:movieId", component: EditMovieComponent },
  { path:"not-found", component: NotFoundComponent },
  { path:"", redirectTo: "movies", pathMatch: "full" },
  { path:"**", redirectTo: "not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
