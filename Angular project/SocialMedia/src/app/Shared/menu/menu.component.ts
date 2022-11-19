import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../../Model/notification';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  notifications: Notification[] = [

  ]

  searchedText='';

  @Input() loggedInUser?: firebase.User | null;

  constructor(public router: Router, private authService: AuthService, private notificationService: NotificationsService) { }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
      this.notificationService.getAll(this.loggedInUser.uid).pipe(first()).subscribe(notifications => {
        notifications.forEach(noti => {
          this.notifications.push(noti);
        });
      });
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
    
  }

  onSearch(){
    this.router.navigateByUrl("/kovetok/" + this.searchedText).then(()=>{window.location.reload()})
  }

  onDelete(noti: Notification) {
    this.notificationService.delete(noti);
    const index = this.notifications.indexOf(noti, 0);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
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
