import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Felhasznalo} from "../../Model/Felhasznalo";

@Component({
  selector: 'app-profilnezo',
  templateUrl: './profilnezo.component.html',
  styleUrls: ['./profilnezo.component.scss']
})
export class ProfilnezoComponent implements OnInit {
  user: any;

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
