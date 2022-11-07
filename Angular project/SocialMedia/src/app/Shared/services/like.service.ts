import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { authState, Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  postCollectionName = "Posztok";
  likeCollectionName = "Kedvelesek";

  constructor(private afs: AngularFirestore, private auth: Auth) { }

  like(postId: string) {
    authState(this.auth).subscribe( user => {
      if (user) { 
        return this.afs.collection(this.postCollectionName).doc(postId).collection(this.likeCollectionName).doc(user.uid).set({}); 
      }
      return
    });
  }

  dislike(postId: string) {
    authState(this.auth).subscribe( user => {
      if (user) { 
        return this.afs.collection(this.postCollectionName).doc(postId).collection(this.likeCollectionName).doc(user.uid).delete(); 
      }
      return
    });
  }
}

//this.likeService.like("MSLMYbmSk14JylU6H25C"); TESZT MUKODIK
