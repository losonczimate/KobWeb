import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../Shared/services/auth.service';
import { first } from 'rxjs';
import {collection, getDocs} from "@angular/fire/firestore";
import {UserService} from "../../Shared/services/user.service";

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

  isSubmit = true;
  submitMessage = "";

  constructor(private _formBuilder: UntypedFormBuilder, private afs: AngularFirestore, private auth: AuthService, private userService: UserService) { }

  //Megnezzuk hogy be van e jelentkezve a felhasznalo, ha igen, akkor automatikusan kitoltjuk az email reszt.
  ngOnInit(): void {
    this.auth.isUserLoggedIn().pipe().subscribe(curruser => {
      if (curruser) {
        this.firstFormGroup.get('email').patchValue(curruser.email);
      }
    });
  }

  send(firstFormValue: any, secondFormValue: any){
    console.log(firstFormValue);
    console.log(secondFormValue);

    const hiba = {
      firstname: firstFormValue.firstname,
      surname: firstFormValue.surname,
      email: firstFormValue.email,
      phone: firstFormValue.phone,
      problem: secondFormValue.problem,
    }

    this.afs.collection("Hibajelentesek").add(hiba);

    this.submitMessage = "Hibajelentés sikeresen elküldve!";
    this.showAlert(this.submitMessage);
  }

  showAlert(withMessage: string) {
    alert(withMessage);
  }
}
