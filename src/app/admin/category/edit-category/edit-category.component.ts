import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category: any = null

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){
        this.categoryService.getCategoryById(params["categoryId"]).subscribe(category => {
          if(category){
            this.category = {
              id: params["categoryId"],
              name: category.name
            }
          }else{
            this.router.navigate(["not-found"])
          }
        })
      }else{
        this.router.navigate(["not-found"])
      }
    })
  }

  ngOnInit(): void {
  }


  categoryForm = new FormGroup({
    name: new FormControl("")
  })

  editCategory(){
    if(this.categoryForm.value.name.trim() !== ""){
      const updatedCategory = {
        id: this.category.id,
        name: JSON.stringify(this.categoryForm.value.name.trim())
      }
      this.categoryService.editCategory(updatedCategory).subscribe(data => {
        this.router.navigate(["/admin/category"])
      })
    }
  }


}
