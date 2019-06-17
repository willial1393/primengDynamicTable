import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

    constructor(private route: Router) {
    }

    ngOnInit() {
    }

    backAdmin() {
        this.route.navigate(['admin']);
    }
}
