import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movie: any = null
  categories: any = null
  error: string = ""

  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      if(params["movieId"]){
        this.movieService.getMovieById(params["movieId"]).subscribe(movie => {
          this.movie = {
            id: params["movieId"],
            ...this.movie = movie
          }
        })
      }
    })
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  ngOnInit(): void {
  }

  movieForm = new FormGroup({
    name: new FormControl(""),
    image: new FormControl(""),
    description: new FormControl(""),
    publishYear: new FormControl(""),
    imdb: new FormControl(""),
    categoryName: new FormControl("")
  })

  checkForm(){
    const updatedMovie = {
      id: JSON.stringify(this.movie.id),
      name: this.movieForm.value.name.trim() ? this.movieForm.value.name : this.movie.name,
      image: JSON.stringify(this.movieForm.value.image.trim() ? this.movieForm.value.image : this.movie.image),
      description: JSON.stringify(this.movieForm.value.description.trim() ? this.movieForm.value.description : this.movie.description),
      imdb: JSON.stringify(this.movieForm.value.imdb.trim() ? this.movieForm.value.imdb : this.movie.imdb),
      categoryName: this.movieForm.value.categoryName.trim() ? this.movieForm.value.categoryName : this.movie.categoryName
    }
    return updatedMovie
  }

  editMovie(){
    let updatedMovie = this.checkForm()
    this.movieService.editMovie(updatedMovie).subscribe(data => {
      this.router.navigate(["/admin/movie"])
    })
  }

}
