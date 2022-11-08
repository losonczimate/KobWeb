import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Shared/services/user.service";
import {AuthService} from "../../Shared/services/auth.service";
import {Felhasznalo} from "../../Model/Felhasznalo";
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    nickname: new FormControl(''),

  });

  constructor(private location: Location, private router: Router, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.regForm.valid) {

      if (this.regForm.get("password")?.value == this.regForm.get("rePassword")?.value) {

        this.authService.signup(this.regForm.get('email')?.value as string, this.regForm.get('password')?.value as string).then(cred => {

          const user: Felhasznalo = {
            id: cred.user?.uid as string,
            email: this.regForm.get('email')?.value as string,
            nev: this.regForm.get('nickname')?.value as string,
            ismerosok: [],
            regdatum: Date.now()
          }

          this.userService.create(user).then(_ => {
            console.log('User added successfully.');
            this.router.navigateByUrl('/profile');
          }).catch(error => {
            console.error(error);
          })
        }).catch(error => {
          console.error(error);
        });
      } else {
        this.regForm.controls['rePassword'].setErrors({'incorrect': true})
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
