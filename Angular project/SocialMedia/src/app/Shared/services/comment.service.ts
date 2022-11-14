import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";
import { Comment } from '../../Model/comment';
import {Posztok} from "../../Model/posztok";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  postCollectionName = "Posztok";
  commentCollectionName = "Kommentek";

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment) {
    return this.afs.collection(this.commentCollectionName).doc(comment.commentId).set(comment);
  }

  getComment(commentid: string) {
    return this.afs.collection(this.commentCollectionName).doc(commentid).valueChanges();
  }

  getIfPostID(postID:string){
   // return this.afs.collection<Comment>(this.commentCollectionName, ref => ref.where("").orderBy("idopont", "desc")).valueChanges();
  }

  editComment(comment: Comment) {
    return this.afs.collection(this.commentCollectionName).doc(comment.commentId).update(comment);
  }

  delete(comment: Comment) {
    return this.afs.collection(this.commentCollectionName).doc(comment.commentId).delete();
  }
}

    // Testing comment backend CREATE mukodik
    // const comment: Comment = {
    //   postId: 'MSLMYbmSk14JylU6H25C',
    //   commentId: '', //Ezt hagy uresen, a create fuggveny majd csinal neki id-t.
    //   comment: "be szartam",
    //   username: "pistike",
    //   date: new Date()
    // }
    // commentService.create(comment).then(_ => {
    //   //Comment felkuldes sikeres, frissiteni kell a komment reszleget h latszodjon.
    // }).catch(error => {
    //   console.error(error);
    // })

    // Testing comment backend DELETE mukodik
    // const comment: Comment = {
    //     postId: 'MSLMYbmSk14JylU6H25C',
    //     commentId: 'p2mQ8X3eP5Jl0UAo4O0O',
    //     comment: "be szartam",
    //     username: "pistike",
    //     date: new Date()
    //   }
    // this.commentService.delete(comment);

    // Testing comment backend GETCOMMENTS mukodik
    // this.commentService.getComments("MSLMYbmSk14JylU6H25C").subscribe(comments => {
    //   console.log(comments);
    // })

    // Testing comment backend EDITCOMMENT mukodik
    // const comment: Comment = {
    //   postId: 'MSLMYbmSk14JylU6H25C',
    //   commentId: 'pByJEChAY1esRY6UBTdh',
    //   comment: "gym crush nem beszel velem",
    //   username: "pistike",
    //   date: new Date()
    // }

    // this.commentService.editComment(comment);
