import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";
import {Posztok} from "../../Model/posztok";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postCollectionName = "Posztok";

  constructor(private afs: AngularFirestore) { }

  create(poszt: Posztok) {
    return this.afs.collection(this.postCollectionName).doc(this.afs.createId()).set(poszt);
  }

  getPoszt(postId: string) {
    return this.afs.collection(this.postCollectionName).doc(postId);
  }

  editPoszt(postId: string, newPost: string) {
    return this.afs.collection(this.postCollectionName).doc(postId).update({Poszt:newPost});
  }

  delete(postId: string) {
    return this.afs.collection(this.postCollectionName).doc(postId).delete();
  }
}


