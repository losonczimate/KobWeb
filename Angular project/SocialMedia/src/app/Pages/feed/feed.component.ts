import { Component,Input, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs";
import {PostService} from "../../Shared/services/post.service";
import {UserService} from "../../Shared/services/user.service";
import {Posztok} from "../../Model/posztok";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import * as uuid from 'uuid';
import {Comment} from "../../Model/comment";
import {CommentService} from "../../Shared/services/comment.service";
import { NotificationsService } from '../../Shared/services/notifications.service';
import { Notification } from '../../Model/notification';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  show: boolean = false;
  buttonName: any = 'Show';
  panelOpenState = false;
  userisadmin = false;

  ismerosok: Set<string> = new Set<string>();
  loggedinuser;
  profilkepek: Map<string,string> = new Map<string, string>();

  posts: Posztok[] = [];
  postCount: number = 0;

  comments = []
  commentsbypost: Map<String, Comment[]> = new Map<String, Comment[]>();


  toggle() {
    this.buttonName = "COMMENT";
    this.show = !this.show;
  }

  constructor(private fb: FormBuilder, private notificationService: NotificationsService, private commentService: CommentService,private postService: PostService ,private userService:UserService ,private router: Router , private authService:AuthService) { }

  onComment(postID: string, index: number){
    if(this.comments[index] === "" || this.comments[index].trim() === ""){return;}
    let commentID = uuid.v4();

    const comment: Comment = {
      commentId: commentID,
      comment: this.comments[index].trim(),
      userID: this.loggedinuser,
      date: Date.now()
    }

    this.postService.getPoszt(postID).valueChanges().pipe(first()).subscribe(post =>{
      post.commentek.push(commentID);

      this.postService.editPosztComments(postID, post.commentek).then(() =>{
        this.commentService.create(comment).then(() => {
          this.userService.getByID(this.loggedinuser).pipe(first()).subscribe(userwhocommented =>{
            this.comments[index]= "";
            let ujkomment = [];
            ujkomment.push(userwhocommented.nev);
            ujkomment.push(userwhocommented.profileimageURL);
            ujkomment.push(comment.comment);
            ujkomment.push(comment.date);
            this.commentsbypost[post.postID].push(ujkomment)

            //Letrehozok egy uj notificationt
            const noti: Notification = {
              postId: post.postID,
              notificationId: '',
              type: 2,
              username: '',
              ertesitestKapoUsernameId: post.posztoloID,
              ertesitestAdoUsernameId: '',
              date: new Date(),
              ertesites: undefined
            };

            //Meghivom a notificationService notification create fuggvenyet.
            this.notificationService.create(noti);
          })
        });
      })
    })

  }

  like(id: string, indexofpost: number){
    this.postService.getPoszt(id).valueChanges().pipe(first()).subscribe(post =>{
      if(!post.likeolok.includes(this.loggedinuser)) {
        var ujlikolok = post.likeolok;
        ujlikolok.push(this.loggedinuser);

        this.postService.editPosztLikes(id, ujlikolok).then(()=>{this.posts[indexofpost] = post})

        //Letrehozok egy uj notificationt

        const noti: Notification = {
          postId: post.postID,
          notificationId: '',
          type: 0,
          username: '',
          ertesitestKapoUsernameId: post.posztoloID,
          ertesitestAdoUsernameId: '',
          date: new Date(),
          ertesites: undefined
        };

        //Meghivom a notificationService notification create fuggvenyet.
        this.notificationService.create(noti);
      }
    })
  }

  dislike(id: string, indexofpost: number){
    this.postService.getPoszt(id).valueChanges().pipe(first()).subscribe(post =>{
      if(post.likeolok.includes(this.loggedinuser)) {
        var ujlikolok = post.likeolok;

        const index = ujlikolok.indexOf(this.loggedinuser,0)
        ujlikolok.splice(index,1);

        //post.likeolok.splice(index,1)

        this.postService.editPosztLikes(id, ujlikolok).then(()=>{this.posts[indexofpost] = post})



      }
    })
  }

  ngOnInit(): void {
    //megnezi, hogy a korabban lekert postok mennyisege megegyezik-e az adatbazisban eltarolt darabszammal (minden posztot nez)
    this.postService.getCount().pipe(first()).subscribe(count => {
      if (count.get('postCount') === this.postCount) return;
    })

    this.posts = [];


    this.authService.isUserLoggedIn().pipe(first()).subscribe(curruser => {
      if (!curruser) {this.router.navigateByUrl("/login");}

      this.loggedinuser=curruser.uid;

      this.userService.getByID(curruser.uid as string).pipe(first()).subscribe(currentuser => {
        this.ismerosok = new Set(currentuser?.ismerosok as string[]);
        this.ismerosok.add(this.loggedinuser);

        this.postService.getAll().pipe(first()).subscribe(postok =>{
            postok.forEach(post =>{
              this.postCount++;
              if(this.ismerosok.has(post.posztoloID)){
                this.posts.push(post)
                this.comments.push("")

                this.userService.getByID(post.posztoloID).pipe(first()).subscribe(posztolo =>{
                  this.profilkepek.set(post.postID, posztolo.profileimageURL);
                  this.commentsbypost[post.postID] = []
                  post.commentek.forEach(commentid =>{
                    this.commentService.getComment(commentid).pipe(first()).subscribe((comment: Comment) =>{

                      this.userService.getByID(comment.userID).pipe(first()).subscribe(userwhocommented =>{
                        let ujkomment = [];
                        ujkomment.push(userwhocommented.nev);
                        ujkomment.push(userwhocommented.profileimageURL);
                        ujkomment.push(comment.comment);
                        ujkomment.push(comment.date);

                        for(let i=0 ; i <= this.commentsbypost[post.postID].length; i++){
                          if(i == this.commentsbypost[post.postID].length){
                            this.commentsbypost[post.postID].push(ujkomment);
                            break;
                          }

                          if(ujkomment[3] < this.commentsbypost[post.postID][i][3]){
                            this.commentsbypost[post.postID].splice(i, 0, ujkomment);
                            break;
                          }
                        }
                      })


                    })

                  })

                })
              }
            })
        })


      })

      })
  }

}
