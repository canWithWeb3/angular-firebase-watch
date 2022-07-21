import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss']
})
export class AdminMoviesComponent implements OnInit {

  movies: Movie[] = []

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies
    })
  }

  ngOnInit(): void {
  }

  deleteMovie(movie: Movie){
    this.movieService.deleteMovie(movie).subscribe(data => {
      this.movieService.getMovies().subscribe(movies => {
        this.movies = movies
      })
    })
  }

}
