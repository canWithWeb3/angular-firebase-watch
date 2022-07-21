import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any = null

  constructor(
    private movieService: MovieService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      if(params["movieId"]){
        this.movieService.getMovieById(params["movieId"]).subscribe(movie => {
          this.movie = movie
        })
      }
    })
  }

  ngOnInit(): void {
  }

  addToList($event: any, name: string){
    this.alertifyService.success(`${name} listene eklendi.`)
  }

}
