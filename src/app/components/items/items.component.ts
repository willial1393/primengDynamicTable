import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Item} from '../../models/item';
import {MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {ItemService} from '../../services/item.service';
import {IconService} from '../../services/icon.service';
import {Project} from '../../models/project';
import {ConfigGlobal} from '../../utilities/config-global';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    displayDialog: boolean;
    item: Item = new Item();
    itemSelected: any;
    newItem: boolean;
    items: Item[] = [];
    cols: any[] = [];
    project: Project;

    constructor(private messageService: MessageService,
                private itemService: ItemService,
                private sanitizer: DomSanitizer,
                private appComponent: AppComponent,
                private iconService: IconService,
                private route: Router) {
        this.project = ConfigGlobal.getProject();
        this.iconService.getAll().subscribe(res => {
            if (res['result']) {
                this.cols = [
                    {field: 'label', header: 'Label', type: 'text', required: true},
                    {
                        field: 'icon', header: 'Icono', type: 'select'
                        , options: res['response'], label: 'name', required: true
                    },
                    {field: 'url', header: 'Url', type: 'text', required: true}
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
        this.itemService.getAll().subscribe(res => {
            this.appComponent.showLoading(false);
            if (res['result']) {
                this.items = res['response'];
                this.items = this.items.filter(x => x.project_id === this.project.id);
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
        this.itemSelected = null;
        this.newItem = true;
        this.item = new Item();
        this.displayDialog = true;
    }

    save() {
        this.item.project_id = this.project.id;
        this.item.icon_id = this.item.icon.id;
        this.appComponent.showLoading(true);
        this.itemService.store(this.item).subscribe(res => {
            this.appComponent.showLoading(false);
            if (res['result']) {
                this.displayDialog = false;
                this.item = null;
                this.loadProjects();
                this.appComponent.showToast(
                    'Operación exitosa',
                    'Item guardado',
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
        const item: Item = new Item();
        Object.assign(item, this.itemSelected);
        this.itemService.destroy(item).subscribe(res => {
            this.appComponent.showLoading(false);
            if (res['result']) {
                this.loadProjects();
                this.appComponent.showToast(
                    'Operación exitosa',
                    'Item eliminado',
                    'success'
                );
            } else {
                this.appComponent.showErrorService(res);
            }
        });
    }

    onRowSelect(event) {
        this.newItem = false;
        this.item = this.cloneProject(event.data);
        this.displayDialog = true;
    }

    cloneProject(p: Item): Item {
        const item = new Item();
        for (const prop of Object.keys(p)) {
            item[prop] = p[prop];
        }
        return item;
    }

    backAdmin() {
        this.route.navigate(['admin']);
    }
}
