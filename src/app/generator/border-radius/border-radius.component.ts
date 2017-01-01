import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss']
})
export class BorderRadiusComponent implements OnInit {

  topLeftValue: string = '0';
  topRightValue: string = '0';
  bottomLeftValue: string = '0';
  bottomRightValue: string = '0';

  constructor() { }

  ngOnInit() {
  }

}
