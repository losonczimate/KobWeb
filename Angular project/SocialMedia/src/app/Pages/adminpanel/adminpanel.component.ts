import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../Shared/services/user.service";
import {AuthService} from "../../Shared/services/auth.service";
import {Felhasznalo} from "../../Model/Felhasznalo";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  loggedInUser: firebase.User | null;
  userek: Felhasznalo[] = [];

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser => {
      this.loggedInUser = curruser;
      this.userService.getAll().subscribe(users => {
        users.forEach(user => {
          if (user.id !== this.loggedInUser.uid) {
            this.userek.push(user);
          }
        })
      }
      )
    })
  }

  banUser(bannedUser: Felhasznalo) {
    this.userService.banUser(bannedUser).then(() => {
      window.location.reload();
    }).catch(error => {
      console.log(error);
    })
  }

  unBanUser(unBannedUser: Felhasznalo) {
    this.userService.unBanUser(unBannedUser).then(() => {
      window.location.reload();
    }).catch(error => {
      console.log(error);
    })
  }
}