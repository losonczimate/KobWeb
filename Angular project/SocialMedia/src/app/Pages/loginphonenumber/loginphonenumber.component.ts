import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "@angular/fire/auth";
import {AuthService} from "../../Shared/services/auth.service";
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-loginphonenumber',
  templateUrl: './loginphonenumber.component.html',
  styleUrls: ['./loginphonenumber.component.scss']
})
export class LoginphonenumberComponent implements OnInit {

  reCaptchaVerifier: any

  phoneForm = new FormGroup({
    phonenumber: new FormControl('')
  })

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  getOTP(){
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('belepo', {size: 'invisible'})
    signInWithPhoneNumber(getAuth(), this.phoneForm.get('phonenumber')?.value as string,this.reCaptchaVerifier).then((otp) => {
      console.log(otp)
      localStorage.setItem('verificationId',JSON.stringify(otp.verificationId))
      this.router.navigateByUrl('/otp')
    }).catch(error => {
      console.log(error);
    })

  }

  onSubmit(){
    if(this.phoneForm.valid){
      if(this.phoneForm.get('phonenumber')?.value !== ""){
      }
    }
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }
}
