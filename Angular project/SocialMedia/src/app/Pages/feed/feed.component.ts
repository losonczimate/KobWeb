import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/services/auth.service";
import {Router} from "@angular/router";

export interface Tile {
  //ide kell majd 2 adattag:
  // - kep (meg is jelenitjuk)
  // - id/azonosito (eltaroljuk, hogy kattinthato legyen, es behozza a szukseges posztot, amit ugye le tudunk kerdezni
  // Reminder: A galleriaba feltoltott kepek mindegyike valojaban egy poszt
  color: string;
  text: string;
  datemade: number;
  name: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  show: boolean = false;
  buttonName: any = 'Show';
  panelOpenState = false;
  
  tiles: Tile[] = [
    {name:"József", text: 'One', color: 'lightblue', datemade: Date.now()},
    {name:"Attila",text: 'Two', color: 'lightgreen', datemade: 1667763525167},
    {name:"Mona",text: 'Three', color: 'lightpink', datemade: 1667763135167},
    {name:"Lisa",text: 'Four', color: '#DDBDF1', datemade: 1667763534167},
    {name:"Alvin",text: 'One', color: 'lightblue', datemade: 1667763435167},
    {name:"Mókusok",text: 'Two', color: 'lightgreen', datemade: 1667733535167},
    {name:"Toldi Miklos",text: 'Three', color: 'lightpink', datemade: 1667963535167},
    {name:"Orbán",text: 'Four', color: '#DDBDF1', datemade: 1667760535167},
  ];

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

  constructor(private router: Router , private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(curruser => {
      if (!curruser) {
        this.router.navigateByUrl("/login");
      }
    })
  }

}
