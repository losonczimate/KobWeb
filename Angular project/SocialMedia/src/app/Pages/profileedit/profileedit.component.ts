import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {UserService} from "../../Shared/services/user.service";
import {FileUploadService} from "../../Shared/services/file-upload.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Felhasznalo} from "../../Model/Felhasznalo";
import {Router} from "@angular/router";
import {finalize} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {getStorage, ref, deleteObject, getDownloadURL} from "firebase/storage";
import {Firestore, doc, updateDoc} from "@angular/fire/firestore";
import {update} from "@angular/fire/database";
import {uploadBytes} from "@angular/fire/storage";
import {MatRadioChange} from "@angular/material/radio";
import {MatSnackBar} from "@angular/material/snack-bar";

const storage = getStorage();


@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss']
})
export class ProfileeditComponent implements OnInit {
  file: File = null;
  nickname: string = "";
  profilpic: string = "";
  isRequested = false;

  collectionName = "Felhasznalo";

  profileeditForm = new FormGroup({
    file: new FormControl(''),
    nickname: new FormControl(''),
  });
  adminRequestForm = new FormGroup({
    isRequested: new FormControl(''),
    validation: new FormControl('')
  });

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private fileUploadService: FileUploadService,
              private afs: AngularFirestore,
              private fs: Firestore,
              public snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser => {
      if (curruser) {
        this.userService.getByID(curruser.uid as string).subscribe(currentuser => {
          this.nickname = currentuser?.nev as string;
          this.profilpic = currentuser?.profileimageURL;
        })
      }
    })
  }

  goToProfile() {
    this.router.navigateByUrl("/profile");
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    this.authService.currentuser().then(curruser => {
      const updatedUser = doc(this.fs, `${this.collectionName}/${curruser.uid}`);
      if (this.profileeditForm.valid) {
        if (this.profileeditForm.get('file')?.value !== "") {
          const storageRef = ref(storage, `ProfilePics/`)
          uploadBytes(ref(storageRef, this.profileeditForm.get('file')?.value as string),this.file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(downloadURL => {
              updateDoc(updatedUser,{profileimageURL: downloadURL as string}).then(() => {
                this.router.navigateByUrl('/profile')
              }).catch(error => {
                console.error(error);
              })
            })
          }).catch(error => {
            console.error(error);
          })
        }
        if (this.profileeditForm.get('nickname')?.value !== "") {
          updateDoc(updatedUser,{nev: this.profileeditForm.get('nickname')?.value as string}).then(() => {
            this.router.navigateByUrl("/profile");
          }).catch(error => {
            console.error(error);
          })
        }
      }
    })
  }

  onSubmitAdmin() {
    if (this.adminRequestForm.get('isRequested').value && this.adminRequestForm.get('validation').value === "Kobold2022") {
      this.authService.currentuser().then(curruser => {
        const updatedUser = doc(this.fs, `${this.collectionName}/${curruser.uid}`);
        updateDoc(updatedUser,{role: "admin"}).then(() => {
          this.snackBar.open("Sikeresen admin lettél!", "Ok", {
            duration: 2000,
          });
          this.router.navigateByUrl("/profile");
        }).catch(error => {
          console.error(error);
        })
      })
    }
  }
}
