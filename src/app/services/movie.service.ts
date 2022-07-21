import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from "../model/movie";


@Injectable()
export class MovieService {

  movies: Movie[] = []
  url = "https://angular-movie-app-c2e6c-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient){ }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url + "movies.json").pipe(
      map(response => {
        let movies: Movie[] = []

        for(const key in response){
          movies.push({ id:key, ...response[key] })
        }
        return movies
      })
    )
  }

  getMoviesByCategoryId(categoryName: string){
    return this.http.get<Movie[]>(this.url + "movies.json").pipe(
      map(response => {
        let movies: Movie[] = []

        for(const key in response){
          if(response[key].categoryName === categoryName){
            movies.push({ id:key, ...response[key] })
          }
        }

        return movies
      })
    )
  }

  getMovieById(movieId: string){
    return this.http.get<Movie[]>(this.url + "movies/" + movieId + ".json")
  }

  addMovie(newMovie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.url + "movies.json", newMovie)
  }

  editMovie(movie: any): Observable<any>{
    return this.http.put<any>(this.url + "movies/" + movie.id + ".json", movie)
  }

  deleteMovie(movie: Movie): Observable<Movie>{
    return this.http.delete<Movie>(this.url + "movies/" + movie.id + ".json")
  }



}
