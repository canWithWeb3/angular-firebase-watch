import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
  }

  categoryForm = new FormGroup({
    name: new FormControl("")
  })

  addCategory(){
    const newCategory = {
      name: this.categoryForm.value.name.trim()
    }
    this.categoryService.addCategory(newCategory).subscribe(data => {
      this.router.navigate(["/admin/category"])
    })
  }

}
