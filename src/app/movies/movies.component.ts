import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []
  filterText: string = ""
  // productsPerPage = 2
  // selectedPage = 1
  // pageNumbers: any

  constructor(private movieService: MovieService,
              private alertifyService: AlertifyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){
        this.movieService.getMoviesByCategoryId(params["categoryId"]).subscribe(movies => {
          this.movies = movies
        })
      }else{
        this.movieService.getMovies().subscribe(movies => {
          this.movies = movies
        })
      }
    })
  }

  addToList($event: any, name: string){
    this.alertifyService.success(`${name} listene eklendi.`)
  }

  // changePage(p: number = 1){
  //   this.selectedPage = p;
  //   let index = (this.selectedPage - 1) * this.productsPerPage
  //   this.activatedRoute.params.subscribe(params => {
  //     if(params["categoryId"] !== "all"){
  //       index = 1
  //       this.selectedPage = 1
  //       this.movieService.getMoviesByCategoryId(params["categoryId"]).subscribe(movies => {
  //         this.pageNumbers = Array(Math.ceil(movies.length/this.productsPerPage)).fill(0)
  //           .map((a, i) => i + 1)
  //         this.movies = movies.slice(index, (index + this.productsPerPage));
  //       })
  //     }else{
  //       this.movieService.getMovies().subscribe(movies => {
  //         this.pageNumbers = Array(Math.ceil(movies.length/this.productsPerPage)).fill(0)
  //           .map((a, i) => i + 1)
  //         this.movies = movies.slice(index, (index + this.productsPerPage));
  //       })
  //     }
  //   })
  // }


}
