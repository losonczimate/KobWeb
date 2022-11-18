import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../Shared/services/auth.service";

@Component({
  selector: 'app-loginphonenumber',
  templateUrl: './loginphonenumber.component.html',
  styleUrls: ['./loginphonenumber.component.scss']
})
export class LoginphonenumberComponent implements OnInit {


  phoneForm = new FormGroup({
    phonenumber: new FormControl('')
  })

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.phoneForm.valid){
      if(this.phoneForm.get('phonenumber')?.value){
      }
    }
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }
}
