import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Follower} from "../../Model/follower";

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  collectionName = 'Followers';

  constructor(private afs: AngularFirestore) { }

  create(follower: Follower) {
    follower.userId = this.afs.createId();
    return this.afs.collection<Follower>(this.collectionName).doc(follower.userId).set(follower);
  }

  getAll() {
    return this.afs.collection<Follower>(this.collectionName).valueChanges();
  }

  update(follower: Follower) {
    return this.afs.collection<Follower>(this.collectionName).doc(follower.userId).set(follower);
  }

  delete(id: string) {
    return this.afs.collection<Follower>(this.collectionName).doc(id).delete();
  }

}
