import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = []
  selectedCategory: any = null

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  selectCategory(item?: Category){
    if(item){
      this.selectedCategory = item;
    }else{
      this.selectedCategory = null;
    }
  }

  getCategory(id: any){
    return this.categories.find(i => i.id === id)
  }

}
