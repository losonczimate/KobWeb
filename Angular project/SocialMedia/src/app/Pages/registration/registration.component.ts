import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Shared/services/user.service";
import {AuthService} from "../../Shared/services/auth.service";
import {Felhasznalo} from "../../Model/Felhasznalo";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {finalize, Observable} from "rxjs";
import {FileUploadService} from "../../Shared/services/file-upload.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  file: File = null;
  fileUrl: string = "";
  userId: string;
  loading: boolean = false;
  uploadPercentages: Observable<number>;

  regForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    nickname: new FormControl(''),
    file: new FormControl('')
  });

  constructor(private location: Location,
              private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.regForm.valid) {

      if (this.regForm.get("password")?.value == this.regForm.get("rePassword")?.value) {

        this.authService.signup(this.regForm.get('email')?.value as string, this.regForm.get('password')?.value as string).then(cred => {

          const user: Felhasznalo = {
            id: cred.user?.uid as string,
            email: this.regForm.get('email')?.value as string,
            nev: this.regForm.get('nickname')?.value as string,
            ismerosok: [cred.user.uid],
            regdatum: Date.now(),
            profileimageURL: "https://firebasestorage.googleapis.com/v0/b/rf1-2022-kobweb.appspot.com/o/ProfilePics%2Fbasicprofilpic.png?alt=media&token=6d1a73fc-e76a-480b-931d-2b692f649e94"
          }

          if (this.regForm.get('file').value !== "") {
            let uploadProcess = this.fileUploadService.upload(this.file);
            this.loading = true;
            this.uploadPercentages = uploadProcess.percentageChanges()
            uploadProcess.snapshotChanges().pipe(
              finalize(() =>
                this.fileUploadService.fileRef.getDownloadURL().pipe(
                  finalize(() => {
                    this.userService.create(user).then(_ => {
                      console.log('User added successfully with picture.');
                      this.router.navigateByUrl('/profile');
                    }).catch(error => {
                      console.error(error);
                    });
                  })
                ).subscribe(downloadURL => user.profileimageURL = downloadURL))
            ).subscribe();
          } else {
            this.userService.create(user).then(_ => {
              console.log('User added successfully without picture.');
              this.router.navigateByUrl('/profile');
            }).catch(error => {
              console.error(error);
            });
          }


        }).catch(error => {
          console.error(error);
        });
      } else {
        this.regForm.controls['rePassword'].setErrors({'incorrect': true})
      }
    }
  }

  goBack() {
    this.location.back();
  }

  onChange(event) {
    this.file = event.target.files[0];
  }
}
