import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Posztok} from "../../Model/posztok";

@Component({
  selector: 'app-profilnezo',
  templateUrl: './profilnezo.component.html',
  styleUrls: ['./profilnezo.component.scss']
})
export class ProfilnezoComponent implements OnInit {
  user: any;
  profilkepek: Map<string,string> = new Map<string, string>();
  posts: Posztok[] = [];

  constructor(private router: Router) {
    this.user=this.router.getCurrentNavigation().extras.state['felhasznalo'];
    if (this.user.kovetokszama==undefined){
      this.user.kovetokszama=0;
    }
    if(this.user.telefonszam==undefined){
      this.user.telefonszam="Nincs megadva.";
    }
  }

  ngOnInit(): void {
  }

}
