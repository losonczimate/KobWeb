import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { Comment } from '../../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  postCollectionName = "Posztok";
  commentCollectionName = "Kommentek";

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment) {
    comment.commentId = this.afs.createId();
    return this.afs.collection(this.postCollectionName).doc(comment.postId).collection<Comment>(this.commentCollectionName).doc(comment.commentId).set(comment);
  }

  getComments(postId: string) {
    return this.afs.collection(this.postCollectionName).doc(postId).collection<Comment>(this.commentCollectionName).valueChanges();
  }

  delete(comment: Comment) {
    return this.afs.collection(this.postCollectionName).doc(comment.postId).collection<Comment>(this.commentCollectionName).doc(comment.commentId).delete();
  }
}
