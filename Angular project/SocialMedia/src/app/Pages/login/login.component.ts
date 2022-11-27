import { Component, OnInit } from '@angular/core';
//import {getAuth, sendPasswordResetEmail} from '@angular/fire/auth';
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import {UserService} from "../../Shared/services/user.service";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser => {
      if (curruser) {
        this.userService.getByID(curruser.uid).pipe(first()).subscribe(user => {
          if (user.isBanned){
            this.authService.logout().then(() => {
              window.alert("Ki vagy tiltva!");
            }).catch(error => {
              console.log(error);
            })
          }
        })
        this.router.navigateByUrl("/feed");
      }
    })
  }

  onSubmit() {
    this.authService.login(this.LoginForm.get('email')?.value as string, this.LoginForm.get('password')?.value as string).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/profile');
    }).catch(error => {
      console.error(error);
    });
  }

  goToLoginWithPhoneNumber(){
    this.router.navigateByUrl('/loginphonenumber')
  }

  goToReg() {
    this.router.navigateByUrl('/registration')
  }

  goToRePassw() {
    this.router.navigateByUrl('/passreset')
  }
}
