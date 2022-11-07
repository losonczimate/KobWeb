import { Injectable } from '@angular/core';
import {Felhasznalo} from "../../Model/Felhasznalo";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Felhasznalo';

  constructor(private fs: Firestore) { }

  create(Felhasznalo: Felhasznalo) {
    const usersref = collection(this.fs, this.collectionName);
    return addDoc(usersref, Felhasznalo);
  }

  getAll() {
    const usersRef = collection(this.fs, this.collectionName);
    return collectionData(usersRef, { idField: 'id' }) as Observable<Felhasznalo[]>;
  }

  updateBook(Felhasznalo: Felhasznalo) {
    const userDocRef = doc(this.fs, `${this.collectionName}/${Felhasznalo.id}`);
    return setDoc(userDocRef, Felhasznalo);
  }

  deleteUser(Felhasznalo: Felhasznalo) {
    const bookDocRef = doc(this.fs, this.collectionName +'/' + Felhasznalo.id);
    return deleteDoc(bookDocRef);
  }

  getBookByID(id: string) {
    const userRef = doc(this.fs, `${this.collectionName}/${id}`);
    return docData(userRef, { idField: 'id' }) as Observable<Felhasznalo>;
  }

}
