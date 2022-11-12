import { Injectable } from '@angular/core';
import {Felhasznalo} from "../../Model/Felhasznalo";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where, startAt, endAt, getDocs, orderBy
} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {user} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Felhasznalo';

  constructor(private fs: Firestore) { }

  create(Felhasznalo: Felhasznalo) {
    const userDocRef = doc(this.fs, `${this.collectionName}/${Felhasznalo.id}`);
    return setDoc(userDocRef, Felhasznalo);
    //const usersref = collection(this.fs, this.collectionName);
    //return addDoc(usersref, Felhasznalo);
  }

  getAll() {
    const usersRef = collection(this.fs, this.collectionName);
    return collectionData(usersRef, { idField: 'id' }) as Observable<Felhasznalo[]>;
  }

  updateUser(Felhasznalo: Felhasznalo) {
    const userDocRef = doc(this.fs, `${this.collectionName}/${Felhasznalo.id}`);
    return setDoc(userDocRef, Felhasznalo);
  }

  deleteUser(Felhasznalo: Felhasznalo) {
    const bookDocRef = doc(this.fs, this.collectionName +'/' + Felhasznalo.id);
    return deleteDoc(bookDocRef);
  }

  getByID(id: string) {
    const userRef = doc(this.fs, `${this.collectionName}/${id}`);
    return docData(userRef, { idField: 'id' }) as Observable<Felhasznalo>;
  }

  getIfContains(searched: string) {
    const usersRef = collection(this.fs, this.collectionName);
    const q1 = query(usersRef, orderBy('nev')) //ha tartalmazza a keresést akkor kiadja
    const q2 = query(usersRef, orderBy('nev'), startAt(searched), endAt(searched+'\uf8ff')) // csak ha a keresessel kezdodik
    return getDocs(q1)
  }

}
