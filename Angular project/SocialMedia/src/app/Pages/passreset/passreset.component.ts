import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../Shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.scss']
})
export class PassresetComponent implements OnInit {

  PassresetForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.newpass(this.PassresetForm.get('email')?.value as string)
    this.router.navigateByUrl('/login');
  }
}
