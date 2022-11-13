import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs";
import {PostService} from "../../Shared/services/post.service";
import {UserService} from "../../Shared/services/user.service";
import {Posztok} from "../../Model/posztok";

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

  comments: any[] = [
    { userName: 'Orbán', comment: 'Rezsicsökkentés', postId: 1},
    { userName: 'Attila', comment: 'Kecske', postId: 2},
    { userName: 'Feri', comment: 'Keresett a Feri :)', postId: 3},
    { userName: 'Doge', comment: 'Vau!', postId: 4}
  ];

  toggle() {
    this.buttonName = "COMMENT";
    this.show = !this.show;
  }

  constructor(private postService: PostService ,private userService:UserService ,private router: Router , private authService:AuthService) { }

  like(id: string, indexofpost: number){
    this.postService.getPoszt(id).valueChanges().pipe(first()).subscribe(post =>{
      if(!post.likeolok.includes(this.loggedinuser)) {
        var ujlikolok = post.likeolok;
        ujlikolok.push(this.loggedinuser);

        this.postService.editPosztLikes(id, ujlikolok).then(()=>{this.posts[indexofpost] = post})

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
    this.posts = [];
    this.authService.isUserLoggedIn().pipe(first()).subscribe(curruser => {
      if (!curruser) {this.router.navigateByUrl("/login");}

      this.loggedinuser=curruser.uid;

      this.userService.getByID(curruser.uid as string).pipe(first()).subscribe(currentuser => {
        this.ismerosok = new Set(currentuser?.ismerosok as string[]);
        this.ismerosok.add(this.loggedinuser);

        this.postService.getAll().pipe(first()).subscribe(postok =>{
            postok.forEach(post =>{
              if(this.ismerosok.has(post.posztoloID)){
                this.posts.push(post)

                this.userService.getByID(post.posztoloID).pipe(first()).subscribe(posztolo =>{
                  this.profilkepek.set(post.postID, posztolo.profileimageURL);
                })



              }
            })
        })


      })

      })
  }

}
