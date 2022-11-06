import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Image} from "../../Model/image";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  collectionName = 'Images';

  constructor(private afs: AngularFirestore) { }

  create(image: Image) {
    image.id = this.afs.createId();
    return this.afs.collection<Image>(this.collectionName).doc(image.id).set(image);
  }

  getAll() {
    return this.afs.collection<Image>(this.collectionName).valueChanges();
  }

  update(image: Image) {
    return this.afs.collection<Image>(this.collectionName).doc(image.id).set(image);
  }

  delete(id: string) {
    return this.afs.collection<Image>(this.collectionName).doc(id).delete();
  }

  getById(id: string) {
    return this.afs.collection<Image>(this.collectionName).doc(id).valueChanges();
  }

}
