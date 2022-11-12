import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {UserService} from "../../Shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  nickname: string;
  profilpic: string;

  constructor(private authService: AuthService, private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser =>{
      if(curruser){
        console.log(curruser)
        this.userService.getByID(curruser.uid as string).subscribe(currentuser =>{
          this.nickname = currentuser?.nev as string;
          this.profilpic = currentuser.profileimageURL;
          console.log(this.nickname);
          console.log(this.authService.isUserLoggedIn())
        });
      } else {
        this.router.navigateByUrl("/login")
      }
    })
  }
}
