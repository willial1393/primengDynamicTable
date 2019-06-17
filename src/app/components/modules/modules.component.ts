import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../../models/project';
import {MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {ConfigGlobal} from '../../utilities/config-global';
import {ModuleService} from '../../services/module.service';
import {StateService} from '../../services/state.service';
import {Module} from '../../models/module';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

    displayDialog: boolean;
    module: Module = new Module();
    moduleSelected: any;
    newModule: boolean;
    modules: Module[] = [];
    cols: any[] = [];
    project: Project;

    constructor(private messageService: MessageService,
                private moduleService: ModuleService,
                private sanitizer: DomSanitizer,
                private appComponent: AppComponent,
                private stateService: StateService,
                private route: Router) {
        this.project = ConfigGlobal.getProject();
        this.stateService.getAll().subscribe(res => {
            if (res['result']) {
                this.cols = [
                    {field: 'name', header: 'Nombre', type: 'text', required: true},
                    {
                        field: 'state', header: 'Estado', type: 'select'
                        , options: res['response'], label: 'name', required: true
                    },
                ];
            } else {
                this.appComponent.showErrorService(res);
            }
        });
        this.loadProjects();
    }

    ngOnInit() {
    }

    loadProjects() {
        this.appComponent.showLoading(true);
        this.moduleService.getAll().subscribe(res => {
            this.appComponent.showLoading(false);
            if (res['result']) {
                this.modules = res['response'];
                this.modules = this.modules.filter(x => x.project_id === this.project.id);
            } else {
                this.appComponent.showErrorService(res);
            }
        });
    }

    openToast() {
        this.messageService.add({
            key: 'c',
            severity: 'warn',
            summary: '¿Desea eliminar el Item?',
            detail: ''
        });
    }

    closeToast() {
        this.messageService.clear('c');
    }

    showDialogToAdd() {
        this.moduleSelected = null;
        this.newModule = true;
        this.module = new Module();
        this.displayDialog = true;
    }

    save() {
        this.module.project_id = this.project.id;
        this.module.state_id = this.module.state.id;
        this.appComponent.showLoading(true);
        this.moduleService.store(this.module).subscribe(res => {
            this.appComponent.showLoading(false);
            if (res['result']) {
                this.displayDialog = false;
                this.module = null;
                this.loadProjects();
                this.appComponent.showToast(
                    'Operación exitosa',
                    'Módulo guardado',
                    'success'
                );
            } else {
                this.appComponent.showErrorService(res);
            }
        });
    }

    delete() {
        this.displayDialog = false;
        this.closeToast();
        this.appComponent.showLoading(true);
        const module: Module = new Module();
        Object.assign(module, this.moduleSelected);
        this.moduleService.destroy(module).subscribe(res => {
            this.appComponent.showLoading(false);
            if (res['result']) {
                this.loadProjects();
                this.appComponent.showToast(
                    'Operación exitosa',
                    'Módulo eliminado',
                    'success'
                );
            } else {
                this.appComponent.showErrorService(res);
            }
        });
    }

    onRowSelect(event) {
        this.newModule = false;
        this.module = this.cloneProject(event.data);
        this.displayDialog = true;
    }

    cloneProject(p: Module): Module {
        const module = new Module();
        for (const prop of Object.keys(p)) {
            module[prop] = p[prop];
        }
        return module;
    }

    backAdmin() {
        this.route.navigate(['admin']);
    }
}
