import { Injectable } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  filePath: string = "/PostPics/";
  fileRef;
  // uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;

  constructor(private afs:AngularFireStorage) { }

  upload(file){
    this.fileRef = this.afs.ref(this.filePath);
    return this.afs.upload(this.filePath + file.name, file);
  }
}
