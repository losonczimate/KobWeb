import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Posztok} from "../../Model/posztok";
import {FileUploadService} from "./file-upload.service";
import {finalize, first} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postCollectionName = "Posztok";

  constructor(private afs: AngularFirestore, private fileUploadService: FileUploadService) { }

  create(poszt: Posztok) {
    return this.afs.collection(this.postCollectionName).doc(poszt.postID).set(poszt);
  }

  getAll() {
    return this.afs.collection<Posztok>(this.postCollectionName, ref => ref.orderBy("idopont", "desc")).valueChanges();
  }
  //ez mind szép és jó, de getAllkéne ezek helyett :)

  getPoszt(postId: string) {
    return this.afs.collection<Posztok>(this.postCollectionName).doc(postId);
  }

  editPosztComments(postId: string, newComments: string[]) {
    return this.afs.collection(this.postCollectionName).doc(postId).update({commentek:newComments});
  }

  editPosztLikes(postId: string, newlikeolok: string[]) {
    return this.afs.collection(this.postCollectionName).doc(postId).update({likeolok:newlikeolok});
  }

  delete(postId: string) {
    // const postRef = this.afs.collection(this.postCollectionName).doc('PostCount_doc');
    // await postRef.update({
    //   postCount: FieldValue.increment(-1)
    // });
    let kepid;
    this.getPoszt(postId).valueChanges().pipe(first()).subscribe(post => {
      kepid = post.kepId;
      if (kepid === "") return this.afs.collection(this.postCollectionName).doc(postId).delete();
      this.fileUploadService.delete(kepid).then(_ => {
        console.log(kepid + "  lefut?")
        return this.afs.collection(this.postCollectionName).doc(postId).delete();
      });
    });
  }

  //Balazs belenyul, hogy tonkretegye a kodot, Puszi!
  getCount(){
    return this.afs.collection(this.postCollectionName).doc('PostCount_doc').get();
  }
}


