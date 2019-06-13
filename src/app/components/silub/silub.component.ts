import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-silub',
  templateUrl: './silub.component.html',
  styleUrls: ['./silub.component.css']
})
export class SilubComponent implements OnInit {

  display = false;
  items: MenuItem[];
  styleCards: any;

  constructor(appComponent: AppComponent) {
    this.styleCards = appComponent.styleCards;
    this.items = [
      {label: 'Proyecto', icon: 'pi pi-info', url: 'http://appsprod.tk/silub/'},
      {label: 'GitHub', icon: 'pi pi-info', url: 'https://github.com/willial1393/SILUB'}
    ];
  }

  ngOnInit() {
  }

  actionEstate() {
    this.display = true;
  }

}
