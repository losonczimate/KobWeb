import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  bigbool: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  close() {
  }
}
