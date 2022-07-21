import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  categories: Category[] = []
  error: string = ""

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }


  checkForm(){
    let checked = false
    if(this.movieForm.value.name.trim() !== ""){
      if(this.movieForm.value.image.trim() !== ""){
        if(this.movieForm.value.description.trim() !== ""){
          if(this.movieForm.value.publishYear.trim() !== ""){
            if(this.movieForm.value.imdb.trim() !== ""){
              if(this.movieForm.value.categoryName.trim() !== ""){
                checked = true
              }else{
                this.error = "Kategori boş bırakılamaz."
              }
            }else{
              this.error = "Film imdb boş bırakılamaz."
            }
          }else{
            this.error = "Film yayın yılı boş bırakılamaz."
          }
        }else{
          this.error = "Film Açıklama boş bırakılamaz."
        }
      }else{
        this.error = "Film Resim boş bırakılamaz."
      }
    }else{
      this.error = "Film Adı boş bırakılamaz."
    }
    return checked
  }

  movieForm = new FormGroup({
    name: new FormControl(""),
    image: new FormControl(""),
    description: new FormControl(""),
    publishYear: new FormControl(""),
    imdb: new FormControl(""),
    categoryName: new FormControl(""),
  })

  addMovie(){
    if(this.checkForm()){
      if(this.movieForm.value.categoryId !== ""){
        const newMovie = {
          name: this.movieForm.value.name.trim(),
          image: this.movieForm.value.image.trim(),
          description: this.movieForm.value.description.trim(),
          publishYear: Number(this.movieForm.value.publishYear.trim()),
          imdb: Number(this.movieForm.value.imdb.trim()),
          categoryName: this.movieForm.value.categoryName,
          createdAt: new Date()
        }
        this.movieService.addMovie(newMovie).subscribe(data => {
          this.router.navigate(["/admin/movie"])
        })
      }else{
        this.error = "Kategori boş bırakılamaz."
      }
    }
  }


}
