import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { Notification } from '../../Model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private afs: AngularFirestore) { 
  }

  create(notification: Notification) {
    notification.notificationId = this.afs.createId();
  }

  getAll() {

  }

  delete() {

  }

  
}
