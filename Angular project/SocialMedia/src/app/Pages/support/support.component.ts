import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  firstFormGroup: UntypedFormGroup = this._formBuilder.group({
    firstname: [''],
    surname: [''],
    email: [''],
    phone: ['']});
  secondFormGroup: UntypedFormGroup = this._formBuilder.group({problem: ['']});

  constructor(private _formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  send(){

  }

}
