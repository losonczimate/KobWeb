import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AdvertService} from "../../Shared/services/advert.service";
import {finalize, first} from "rxjs";
import {randomInt} from "crypto";
import {Hirdetes} from "../../Model/hirdetes";

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() topad?: boolean;
  @Input() botad?: boolean;
  @Input() fillad?: boolean;
  @Input() vertad?: boolean;
  picUrl: string = "";
  vertAdverts: Hirdetes[] = [];
  horizAdverts: Hirdetes[] = [];
  isLoaded: boolean;


  constructor(private afs: AngularFirestore, private advertService: AdvertService) {
  }

  ngOnInit(): void {
    if (this.picUrl !== "") return;
    if (this.topad == true || this.botad == true || this.fillad == true) {
      this.horizAdverts = [];
      //Horizontal ad loading
      this.advertService.getAllHorizontal().pipe(first(), finalize(() => {
        this.picUrl = this.horizAdverts[Math.floor(Math.random() * (this.horizAdverts.length))].kepId;
      })).subscribe(item => {
        item.forEach(advert => {
          this.horizAdverts.push(advert);
        });
      });
      this.picUrl = this.horizAdverts[1].kepId;
    } else if (this.vertad == true) {
      //Vertical ad loading
      this.advertService.getAllVertical().pipe(first(), finalize(() => {
        this.picUrl = this.vertAdverts[Math.floor(Math.random() * (this.vertAdverts.length))].kepId;
      })).subscribe(item => {
        item.forEach(advert => {
          this.vertAdverts.push(advert);
        });
      });
    }
  }
}
