import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onOtpChange(otpCode: any) {

  }

  goToLogin() {
    this.router.navigateByUrl('/login')
  }
}
