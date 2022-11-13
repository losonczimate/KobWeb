import { Injectable } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  basePath: string = "/PostPics/";
  fileRef;

  constructor(private afs:AngularFireStorage) { }

  upload(file){
    const filepath = this.basePath + uuid.v4();
    this.fileRef = this.afs.ref(filepath);
    return this.afs.upload(filepath, file);
  }
}
