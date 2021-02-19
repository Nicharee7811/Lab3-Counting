import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-count',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})
export class CountComponent {

    count = 10;

    constructor() {
    }

    countNumber(){
        this.count = this.count - 1;
        if (this.count == 0) {
            alert("Happy New Year 2021");
        }
    }
}