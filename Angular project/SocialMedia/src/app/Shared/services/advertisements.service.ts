import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Advertisement} from "../../Model/advertisement";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  collectionName = 'Advertisements';

  constructor(private afs: AngularFirestore) {
  }

  create(ad: Advertisement) {
    ad.id = this.afs.createId();
    return this.afs.collection<Advertisement>(this.collectionName).doc(ad.id).set(ad);
  }

  getAll() {
    return this.afs.collection<Advertisement>(this.collectionName).valueChanges();
  }

  update(ad: Advertisement) {
    return this.afs.collection<Advertisement>(this.collectionName).doc(ad.id).set(ad);
  }

  delete(id: string) {
    return this.afs.collection<Advertisement>(this.collectionName).doc(id).delete();
  }

  getById(id: string) {
    return this.afs.collection<Advertisement>(this.collectionName).doc(id).valueChanges();
  }
}
