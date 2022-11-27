import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {UserService} from "../../Shared/services/user.service";
import {getAuth} from "@angular/fire/auth";
import {AuthService} from "../../Shared/services/auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs";
import {Posztok} from "../../Model/posztok";
import {PostService} from "../../Shared/services/post.service";

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

  loggedinuser;
  profilkepek: Map<string,string> = new Map<string, string>();

  posts: Posztok[] = [];

  role: string = "";
  nickname: string = "";
  email: string = "";
  regdatum: number = 0;
  kovetok: string[] = [];
  profilpic: string;
  verified: boolean = false;
  kovetokszama: number = 0;

  constructor(private postService:PostService,private router: Router,private authService: AuthService, private userService: UserService) { }

  sendVerificationMail(){
    return this.authService.currentuser().then((user) => {
      return user.sendEmailVerification();
    }).then(() => {
      window.alert('Ellenőrizd az e-mail fiókodat (a spam mappát is!), és erősítsd meg az e-mail címedet.');
    })
  }

  didClickDelete(post: Posztok) {
    this.postService.delete(post.postID);
    const index = this.posts.indexOf(post, 0);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }

  goToKovetesek(){
      this.router.navigateByUrl("/kovetok")
  }

  goToProfileEdit(){
    this.router.navigateByUrl("/profileedit");
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser =>{
      if(curruser){
        console.log(curruser)
        this.userService.getByID(curruser.uid as string).subscribe(currentuser =>{
          this.nickname = currentuser?.nev as string;
          this.email = currentuser?.email as string;
          this.regdatum = currentuser?.regdatum;
          this.verified = curruser.emailVerified;
          this.kovetok = currentuser.ismerosok;
          this.profilpic = currentuser.profileimageURL;
          this.role = currentuser.role;
          if (this.router.url == "/profile" && !this.verified){
            window.alert("Kérlek erősítsd meg e-mail címedet, hogy teljes értékű felhasználóvá válj!");
          }

          this.userService.getAll().subscribe(users =>{
            this.kovetokszama=0;
            users.forEach(user =>{
              if(user.ismerosok.indexOf(curruser.uid) !== -1){
                this.kovetokszama+= 1;
              }
            })
          })

          this.postService.getAll().pipe(first()).subscribe(postok =>{
            postok.forEach(post =>{
              if(post.posztoloID == curruser.uid){
                this.posts.push(post)

                this.userService.getByID(post.posztoloID).pipe(first()).subscribe(posztolo =>{
                  this.profilkepek.set(post.postID, posztolo.profileimageURL);
                })
              }
            })
          })
        });
      } else {
        this.router.navigateByUrl("/login")
      }
    })
  }

}
