import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string = ""

  constructor(
    private userService: UserService,
    private alertifyService: AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    repassword: new FormControl("")
  })


  checkForm(){
    let username = this.registerForm.value.username
    let email = this.registerForm.value.email
    let password = this.registerForm.value.password
    let repassword = this.registerForm.value.repassword

    let checked = false

    if(username.trim() !== ""){
      if(email.trim() !== ""){
        if(password.trim() !== ""){
          if(password === repassword){
            checked = true
          }else{
            this.error = "Parolalar uyuşmuyor."
          }
        }else{
          this.error = "Parola girmediniz."
        }
      }else{
        this.error = "Email girmediniz."
      }
    }else{
      this.error = "Kullanıcı Adı girmediniz."
    }

    return checked
  }

  addUser(){
    if(this.checkForm()){
      const newUser = {
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        type: "user",
        addedDate: new Date()
      }
      this.userService.addUser(newUser).subscribe(data => {
        this.alertifyService.success("Kayıt başarılı. Doğrulama için giriş yapınız.")
        this.router.navigate(["/giris-yap"])
      })
    }
  }


}
