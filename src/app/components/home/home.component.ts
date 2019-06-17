import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {AppComponent} from '../../app.component';
import {Project} from '../../models/project';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {ConfigGlobal} from '../../utilities/config-global';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    display = false;
    userLogin: User = new User();

    projects: Project[] = [];

    styleCards: any;
    cols: any;

    constructor(private router: Router,
                private projectService: ProjectService,
                private appComponent: AppComponent,
                private userService: UserService) {
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
            } else {
                this.appComponent.showErrorService(res);
            }
        });
    }

    redirectUrlExternal(url) {
        window.open(url, '_self');
    }

    showDialog() {
        this.display = true;
    }

    login() {
        this.userService.login(this.userLogin).subscribe(res => {
            if (res['result']) {
                const user = res['response'];
                if (user) {
                    this.appComponent.showToast(
                        '¡¡¡Bienvenido!!!',
                        user.name,
                        'success');
                    ConfigGlobal.setUserLogin(user);
                    this.router.navigate(['admin']);
                    this.display = false;
                } else {
                    this.appComponent.showToast(
                        'Error',
                        'Usuario o contraseña incorrecta',
                        'error');
                }
            } else {
                this.appComponent.showErrorService(res);
            }
        });
    }
}
