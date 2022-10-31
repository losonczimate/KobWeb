import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  firstFormGroup: FormGroup = this._formBuilder.group({
    firstname: [''],
    surname: [''],
    email: [''],
    phone: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
