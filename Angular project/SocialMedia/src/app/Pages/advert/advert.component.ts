import {Component, Input, OnInit} from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
