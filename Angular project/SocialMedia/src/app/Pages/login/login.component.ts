import { Component, OnInit } from '@angular/core';
import {getAuth, sendPasswordResetEmail} from '@angular/fire/auth';
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {
   // this.authService.newpass(this.LoginForm.get('nickname')?.value as string)
    this.authService.login(this.LoginForm.get('email')?.value as string, this.LoginForm.get('password')?.value as string).then(cred => {
      console.log(cred);

      this.router.navigateByUrl('/profile');
    }).catch(error => {
      console.error(error);
    });
  }


  goToReg() {
    this.router.navigateByUrl('/registration')
  }

  goToRePassw() {
    this.router.navigateByUrl('/newpassword')
  }
}
