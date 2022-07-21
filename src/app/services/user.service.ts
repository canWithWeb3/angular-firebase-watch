import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "../model/user";


@Injectable()
export class UserService {

  isLogged: boolean = false
  loggedUsername: string = ""

  url = "https://angular-movie-app-c2e6c-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient){ }

  getLogged(): any{
    return this.isLogged
  }

  doLogged(){
    const loggedUsername = localStorage.getItem("username")
    if(loggedUsername){
      this.isLogged = true
    }
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url + "users.json").pipe(
      map(response => {
        const users: User[] = []

        for(const key in response){
          users.push({ id: key, ...response[key] })
        }

        return users;
      })
    )
  }

  addUser(newUser: User){
    return this.http.post<User>(this.url + "users.json", newUser)
  }

}
