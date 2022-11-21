import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/firestore';
import {AuthService} from "../../Shared/services/auth.service";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otp: string
  verify: any

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  }

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}')
  }

  onOtpChange(otpCode: any) {
    this.otp = otpCode;
  }

  handleClick() {
    let cred = firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp);
    this.authService.loginWithCred(cred).then((res) => {
      localStorage.setItem('user_data', JSON.stringify(res))
      this.router.navigateByUrl('/profile')
    }).catch(error => {
      console.error(error)
    })
  }

  goToLogin() {
    this.router.navigateByUrl('/login')
  }
}
