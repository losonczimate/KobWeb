import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { Comment } from '../../Model/comment';
import { CommentService } from '../../Shared/services/comment.service';

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

  comments: Comment[] = []

  constructor(private _formBuilder: UntypedFormBuilder, private commentService: CommentService) { }

  ngOnInit(): void {
    
  }

  send(){

  }

}
