import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  goBack() {
    //this.location.back();
  }
}
