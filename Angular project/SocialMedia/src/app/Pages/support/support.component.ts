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
    // Testing comment backend CREATE mukodik
    // const comment: Comment = {
    //   postId: 'MSLMYbmSk14JylU6H25C',
    //   commentId: '', //Ezt hagy uresen, a create fuggveny majd csinal neki id-t.
    //   comment: "be szartam",
    //   username: "pistike",
    //   date: new Date()
    // }
    // commentService.create(comment).then(_ => {
    //   //Comment felkuldes sikeres, frissiteni kell a komment reszleget h latszodjon.
    // }).catch(error => {
    //   console.error(error);
    // })
  }

  send(){

  }

}
