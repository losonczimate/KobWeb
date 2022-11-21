import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../Shared/services/auth.service";
import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-loginphonenumber',
  templateUrl: './loginphonenumber.component.html',
  styleUrls: ['./loginphonenumber.component.scss']
})
export class LoginphonenumberComponent implements OnInit {
  reCaptchaVerifier: any;
  phoneNumber: any;

  phoneForm = new FormGroup({
    phonenumber: new FormControl('')
  })

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  getOTP(){
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('belepo', {size: 'invisible'})
    if(this.phoneForm.valid){
      if(this.phoneForm.get('phonenumber')?.value){
        this.phoneNumber = this.phoneForm.get('phonenumber')?.value;
        firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier).then((conf) => {
          localStorage.setItem('verificationId', JSON.stringify(conf.verificationId));
          this.router.navigateByUrl('/otp');
        }).catch(error => {
          console.log(error);
          setTimeout(() => {
            window.location.reload()
          }, 3000);
        });
      }
    }
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }
}
