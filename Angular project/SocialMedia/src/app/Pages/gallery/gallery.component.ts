import { Component, OnInit } from '@angular/core';
import { Comment } from '../../Model/comment';
import { CommentService } from '../../Shared/services/comment.service';
import { GalleryService } from '../../Shared/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private commentService: CommentService) {
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
   }

  ngOnInit(): void {
  }

}
