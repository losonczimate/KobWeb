import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Hirdetes} from "../../Model/hirdetes";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  collectionName = "Hirdetesek";

  constructor(private afs: AngularFirestore) { }

  getAll(){
    return this.afs.collection<Hirdetes>(this.collectionName).valueChanges();
  }

  getAllVertical(){
    return this.afs.collection<Hirdetes>(this.collectionName, ref => ref.where("isVertical", "==", true)).valueChanges();
  }
  getAllHorizontal(){
    return this.afs.collection<Hirdetes>(this.collectionName, ref => ref.where("isVertical", "==", false)).valueChanges();
  }
}
