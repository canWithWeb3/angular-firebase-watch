import { AlertifyService } from './../../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[] = []
  error:string = ""
  loadingBtn: boolean = false

  constructor(
    private userService: UserService,
    private alertifyService: AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })


  checkUser(){
    this.userService.getUsers().subscribe(users => {
      let exist = false
      let user = null
      users.map(item => {
        if(item.email === this.loginForm.value.email && item.password === this.loginForm.value.password){
          user = item
          exist = true
        }
      })

      if(exist){
        this.login(user)
      }else{
        this.error = "Email veya parola hatalı"
      }

    })
  }

  login(user: any){
    localStorage.setItem("uid", JSON.stringify(user.id))
    localStorage.setItem("username", JSON.stringify(user.username))
    localStorage.setItem("type", JSON.stringify(user.type))

    this.alertifyService.success("Giriş yapıldı")
    this.router.navigate(["/movies"])
  }

}
