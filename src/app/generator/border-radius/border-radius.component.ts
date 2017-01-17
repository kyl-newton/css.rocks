import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-border-radius',
    templateUrl: './border-radius.component.html',
    styleUrls: ['./border-radius.component.scss']
})
export class BorderRadiusComponent implements OnInit {

    topLeftRadius: string = '0';
    topRightRadius: string = '0';
    bottomLeftRadius: string = '0';
    bottomRightRadius: string = '0';

    constructor() {
    }

    ngOnInit() {
    }

}
