import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'landing-projects';
    public styleCards = {
        maxwidth: '300px',
        backgroundColor: 'rgba(173,173,173,0.12)',
        color: 'white'
    };
}
