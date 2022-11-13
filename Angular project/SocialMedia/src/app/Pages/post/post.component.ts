import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {UserService} from "../../Shared/services/user.service";
import {Router} from "@angular/router";
import {FileUploadService} from "../../Shared/services/file-upload.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../Shared/services/post.service";
import {Posztok} from "../../Model/posztok";

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
        idopont: new Date(),
        kepId: this.fileUrl,
        posztoloID: this.userId
      }
      if (this.postForm.get('file') !== null){
        this.loading = !this.loading;
        this.fileUploadService.upload(this.file).subscribe((event:any) => {
          if (typeof (event) === 'object') {
            this.fileUrl = event.link;
            poszt.kepId = this.fileUrl;
            this.loading = false;
            this.postService.create(poszt).then(_ => {
              console.log('Poszt added successfully.');
              this.router.navigateByUrl('/feed');
            }).catch(error => {
              console.error(error);
            });
          }
        });
      } else {
        this.postService.create(poszt).then(_ => {
          console.log('Poszt added successfully.');
          this.router.navigateByUrl('/feed');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  fileUpload(){

  }

  onChange(event) {
    this.file = event.target.files[0];
  }
}
