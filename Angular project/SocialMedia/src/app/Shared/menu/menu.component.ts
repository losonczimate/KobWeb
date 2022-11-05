import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ltsm: boolean = false;
  backdrop: boolean = false;

  constructor(public router: Router) { }

  public screenWidth: any;
  public screenHeight: any;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth < 959) this.ltsm = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth < 959) this.ltsm = true;
  }

  ngOnChanges(){
    console.log("helo")
  }

  close() {
  }
}
