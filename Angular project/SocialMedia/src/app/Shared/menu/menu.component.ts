import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  notifications: any[] = [
    { notificName: "Valaki", notificAction: "likeolta"},
    { notificName: "Feri", notificAction: "megosztotta"},
    { notificName: "Orbán", notificAction: "kommentelt"},
    { notificName: "Teszt", notificAction: "Teszt"}
  ]

  searchedText='';

  @Input() loggedInUser?: firebase.User | null;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });

  }

  onSearch(){
    this.router.navigateByUrl("/kovetok/" + this.searchedText).then(()=>{window.location.reload()})
  }

  logout(){
    this.authService.logout();
  }

  ngOnChanges(){
  }

  close() {
  }

  open() {

  }

}
