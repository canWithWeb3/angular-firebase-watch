import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false

  constructor(private userService: UserService) {
    this.isLogged =  this.userService.getLogged()
  }

  ngOnInit(): void {
    // const loggedUsername = localStorage.getItem("username")
    // console.log(loggedUsername)
    // if(loggedUsername){
    //   this.isLogged = true
    // }
  }

}
