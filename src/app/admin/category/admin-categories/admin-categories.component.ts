import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {

  categories: Category[] = []

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  ngOnInit(): void {
  }

  deleteCategory(category: Category){
    this.categoryService.deleteCategory(category).subscribe(data => {
      this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
        this.router.navigate(["/admin/category"])
      })
    })
  }


}
