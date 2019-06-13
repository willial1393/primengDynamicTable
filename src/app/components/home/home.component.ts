import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    display = false;
    password: any;
    username: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    showDialog() {
        this.display = true;
    }

    login() {
        this.router.navigate(['admin']);
        this.display = false;
    }
}
