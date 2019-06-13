import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'app-jovita',
    templateUrl: './jovita.component.html',
    styleUrls: ['./jovita.component.css']
})
export class JovitaComponent implements OnInit {

    display = false;
    items: MenuItem[];
    styleCards: any;

    constructor(appComponent: AppComponent) {
        this.styleCards = appComponent.styleCards;
        this.items = [
            {label: 'Proyecto', icon: 'pi pi-info', url: 'http://appsprod.tk/jovita/'},
            {label: 'GitHub', icon: 'pi pi-info', url: 'https://github.com/willial1393/Jovita'}
        ];
    }

    ngOnInit() {
    }

    actionEstate() {
        this.display = true;
    }

}
