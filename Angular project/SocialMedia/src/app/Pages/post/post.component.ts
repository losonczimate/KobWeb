import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {UserService} from "../../Shared/services/user.service";
import {Router} from "@angular/router";
import {FileUploadService} from "../../Shared/services/file-upload.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../Shared/services/post.service";
import {Posztok} from "../../Model/posztok";
import {finalize, Observable} from "rxjs";
import * as uuid from 'uuid';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  nickname: string;
  profilpic: string;
  file: File = null;
  fileUrl: string = "";
  userId: string;
  loading: boolean = false;
  uploadPercentage: number;

  postForm = new FormGroup({
    file: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(private authService: AuthService,
              private userService:UserService,
              private router:Router,
              private fileUploadService:FileUploadService,
              private postService: PostService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser =>{
      if(curruser){
        console.log(curruser)
        this.userService.getByID(curruser.uid as string).subscribe(currentuser =>{
          this.userId = curruser.uid;
          this.nickname = currentuser?.nev as string;
          this.profilpic = currentuser.profileimageURL;
          console.log(this.nickname);
          console.log(this.authService.isUserLoggedIn())
        });
      } else {
        this.router.navigateByUrl("/login")
      }
    })
  }

  onSubmit() {
    if (this.postForm.valid){
      const poszt: Posztok = {
        Poszt: this.postForm.get('text')?.value as string,
        Posztolo: this.nickname,
        idopont: Date.now(),
        kepId: "",
        posztoloID: this.userId,
        likeolok: [],
        commentek: [],
        postID: uuid.v4()
      }
      if (this.postForm.get('file').value !== ""){
        let uploadProcess = this.fileUploadService.upload(this.file);
        this.loading = true;
        uploadProcess.percentageChanges().subscribe(percentage => {
          this.uploadPercentage = Math.round(percentage ? percentage : 0);
          uploadProcess.snapshotChanges().pipe(
            finalize(() =>
              this.fileUploadService.fileRef.getDownloadURL().subscribe(downloadURL => {
                poszt.kepId = downloadURL;
                this.postService.create(poszt).then(_ => {
                  this.loading = false;
                  console.log('Post added successfully with a picture.');
                  this.postForm.reset();
                  this.router.navigateByUrl('/feed');
                }).catch(error => {
                  console.error(error);
                })
              }))
          ).subscribe();
        })
      } else {
        this.postService.create(poszt).then(_ => {
          console.log('Post added successfully without a picture.');
          this.postForm.reset();
          this.router.navigateByUrl('/feed');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  onChange(event) {
    this.file = event.target.files[0];
  }
}
