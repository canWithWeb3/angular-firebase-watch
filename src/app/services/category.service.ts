import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../model/category";
import { map, tap } from "rxjs/operators"

@Injectable()
export class CategoryService {

  categories: Category[] = []
  url = "https://angular-movie-app-c2e6c-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient){ }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url + "categories.json").pipe(
      map(response => {
        const categories: Category[] = []

        for(const key in response){
          categories.push({ id: key, ...response[key] })
        }

        return categories
      })
    )
  }

  getCategoryById(categoryId: string): Observable<Category>{
    return this.http.get<Category>(this.url + "categories/" + categoryId + ".json")
  }

  addCategory(newCategory: Category): Observable<Category>{
    return this.http.post<Category>(this.url + "categories.json",newCategory)
  }

  editCategory(category: Category): Observable<Category>{
    return this.http.put<Category>(this.url + "categories/" + category.id + "/name.json",category.name)
  }

  deleteCategory(category: Category){
    return this.http.delete<Category>(this.url + "categories/" + category.id + ".json")
  }

}
