import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
