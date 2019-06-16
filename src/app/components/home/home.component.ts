import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {AppComponent} from '../../app.component';
import {Project} from '../../models/project';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    display = false;
    password: string;
    username: string;

    projects: Project[] = [];

    styleCards: any;
    cols: any;

    constructor(private router: Router,
                private projectService: ProjectService,
                private appComponent: AppComponent) {

        this.styleCards = appComponent.styleCards;
        this.cols = [
            {field: 'name', header: 'Modulo'},
            {field: 'state', header: 'Estado'},
        ];
    }

    ngOnInit() {
        this.projectService.getAll().subscribe(res => {
            if (res['result']) {
                this.projects = res['response'];
                this.projects = this.projects.map(x => {
                    x.values = x.module.map(m => {
                        return {name: m.name, state: m.state.name};
                    });
                    return x;
                });
                console.log(this.projects);
            } else {
                this.appComponent.showErrorService(res['error']);
            }
        });
    }

    actionEstate() {
        this.display = true;
    }

    showDialog() {
        this.display = true;
    }

    login() {
        this.router.navigate(['admin']);
        this.display = false;
    }
}
