import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {UserService} from "../../Shared/services/user.service";

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss']
})
export class ProfileeditComponent implements OnInit {

  nickname: string = "";
  email: string = "";
  profilpic: string;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser => {
      if (curruser){
        this.userService.getByID(curruser.uid as string).subscribe(currentuser => {
          this.nickname = currentuser?.nev as string;
          this.email = currentuser?.email as string;
          this.profilpic = currentuser?.profileimageURL;
        })
      }
    })
  }


}
