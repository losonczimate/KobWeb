import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    password: new FormControl(''),
    nickname: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {

  }


  goToReg() {

  }

  goToRePassw() {

  }
}
