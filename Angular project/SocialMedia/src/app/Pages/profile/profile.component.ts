import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {UserService} from "../../Shared/services/user.service";
import {getAuth} from "@angular/fire/auth";
import {AuthService} from "../../Shared/services/auth.service";
import {Router} from "@angular/router";

export interface Tile {
  //ide kell majd 2 adattag:
  // - kep (meg is jelenitjuk)
  // - id/azonosito (eltaroljuk, hogy kattinthato legyen, es behozza a szukseges posztot, amit ugye le tudunk kerdezni
  // Reminder: A galleriaba feltoltott kepek mindegyike valojaban egy poszt
  color: string;
  text: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
//Dinamikusan kell majd feltolteni a tiles tombot, az adatbazisbol lekerdezett kepekkel.
export class ProfileComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1'},
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1'},
  ];

  nickname: string = "";
  email: string = "";
  regdatum: number = 0;
  verified: boolean = false;

  constructor(private router: Router,private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {


    this.authService.isUserLoggedIn().subscribe(curruser =>{
      if(curruser){
        console.log(curruser)
        this.userService.getByID(curruser.uid as string).subscribe(currentuser =>{
          this.nickname = currentuser?.nev as string;
          this.email = currentuser?.email as string;
          this.regdatum = currentuser?.regdatum;
          this.verified = curruser.emailVerified;
          console.log(this.nickname);
          console.log(this.authService.isUserLoggedIn())
        });
      } else {
        this.router.navigateByUrl("/login")
      }
    })

  }

}
