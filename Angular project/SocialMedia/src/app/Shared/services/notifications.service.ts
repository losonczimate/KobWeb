import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { Notification } from '../../Model/notification';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private afs: AngularFirestore, private auth: Auth, private userService: UserService) { 
  }

  collectionName = 'Ertesitesek';

  create(notification: Notification) {
    notification.notificationId = this.afs.createId();
    authState(this.auth).subscribe( user => {
      if (user) { 
        let _ = this.userService.getByID(user.uid as string).subscribe(currentuser => {
          notification.username = currentuser?.nev as string;
          notification.ertesitestAdoUsernameId = user.uid;
          return this.afs.collection(this.collectionName).doc(notification.ertesitestKapoUsernameId).collection<Notification>(this.collectionName).doc(notification.notificationId).set(notification);
        })        
      }
      return
    });
  }

  getAll(userId: string) {
    return this.afs.collection(this.collectionName).doc(userId).collection<Notification>(this.collectionName).valueChanges();
  }

  delete(notification: Notification) {
    return this.afs.collection(this.collectionName).doc(notification.ertesitestKapoUsernameId).collection<Notification>(this.collectionName).doc(notification.notificationId).delete();
  }  
}


// const notification: Notification = { //ez most poszt like lesz.
//   postId: 'MSLMYbmSk14JylU6H25C', //Post id ugye ures, ha kovetesrol szol az ertesites.
//   notificationId: "", //ezt a notificationService megoldja
//   type: 0, //0 == like, 1 == kovetes
//   username: "", //ezt a notificationService megoldja
//   ertesitestKapoUsernameId: "arPThjUAXxOUN0DK27GcTPDz2wo2",
//   ertesitestAdoUsernameId: "", //ezt a notificationService megoldja
//   date: new Date(),
// }
// this.notificationService.create(notification);

//authState(this.auth).subscribe( user => {
//   if (user) { 
//     this.notificationService.getAll(user.uid).subscribe(values => {
//       console.log(values);
//     });
//   }
//   return
// });