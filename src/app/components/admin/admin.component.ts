import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // displayDialog: boolean;
  // selectedProject: any;
  // newProject: boolean;
  // cols: any[] = [];
  //
  // constructor(private messageService: MessageService,
  //             private sanitizer: DomSanitizer,
  //             private appComponent: AppComponent,
  //             private route: Router) {
  //     this.stateService.getAll().subscribe(res => {
  //         if (res['result']) {
  //             this.cols = [
  //                 {field: 'name', header: 'Nombre', type: 'text', required: true},
  //                 {field: 'type', header: 'Tipo', type: 'text', required: true},
  //                 {field: 'image', header: 'Imagen', type: 'image', required: true},
  //                 {field: 'url', header: 'Url', type: 'text', required: true},
  //                 {field: 'description', header: 'Descripción', type: 'text-area', required: true},
  //                 {
  //                     field: 'state', header: 'Estado', type: 'select'
  //                     , options: res['response'], label: 'name', required: true
  //                 }
  //             ];
  //         } else {
  //             this.appComponent.showErrorService(res);
  //         }
  //     });
  //     this.loadProjects();
  // }
  //
    ngOnInit() {
    }

  //
  // onUpload(event, project: Project, form) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(event.files[0]);
  //     reader.onload = (_event) => {
  //         project.image = reader.result.toString();
  //     };
  //     form.clear();
  // }
  //
  // loadProjects() {
  //     this.appComponent.showLoading(true);
  //     this.projectService.getAll().subscribe(res => {
  //         this.appComponent.showLoading(false);
  //         if (res['result']) {
  //             this.projects = res['response'];
  //         } else {
  //             this.appComponent.showErrorService(res);
  //         }
  //     });
  // }
  //
  // openToast() {
  //     this.messageService.add({
  //         key: 'c',
  //         severity: 'warn',
  //         summary: '¿Desea eliminar el proyecto?',
  //         detail: ''
  //     });
  // }
  //
  // closeToast() {
  //     this.messageService.clear('c');
  // }
  //
  // showDialogToAdd() {
  //     this.selectedProject = null;
  //     this.newProject = true;
  //     this.project = new Project();
  //     this.displayDialog = true;
  // }
  //
  // save() {
  //     this.project.state_id = this.project.state.id;
  //     this.appComponent.showLoading(true);
  //     this.projectService.store(this.project).subscribe(res => {
  //         this.appComponent.showLoading(false);
  //         if (res['result']) {
  //             this.displayDialog = false;
  //             this.project = null;
  //             this.loadProjects();
  //             this.appComponent.showToast(
  //                 'Operación exitosa',
  //                 'Proyecto guardado',
  //                 'success'
  //             );
  //         } else {
  //             this.appComponent.showErrorService(res);
  //         }
  //     });
  // }
  //
  // delete() {
  //     this.displayDialog = false;
  //     this.closeToast();
  //     this.appComponent.showLoading(true);
  //     const project: Project = new Project();
  //     Object.assign(project, this.selectedProject);
  //     this.projectService.destroy(project).subscribe(res => {
  //         this.appComponent.showLoading(false);
  //         if (res['result']) {
  //             this.loadProjects();
  //             this.appComponent.showToast(
  //                 'Operación exitosa',
  //                 'Proyecto eliminado',
  //                 'success'
  //             );
  //         } else {
  //             this.appComponent.showErrorService(res);
  //         }
  //     });
  // }
  //
  // onRowSelect(event) {
  //     this.newProject = false;
  //     this.project = this.cloneProject(event.data);
  //     this.displayDialog = true;
  // }
  //
  // cloneProject(p: Project): Project {
  //     const project = new Project();
  //     for (const prop of Object.keys(p)) {
  //         project[prop] = p[prop];
  //     }
  //     return project;
  // }
  //
  // public getSantizeUrl(url: string) {
  //     return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
  //
  // logout() {
  //     ConfigGlobal.setUserLogin(null);
  //     this.appComponent.showToast(
  //         'Operación exitosa',
  //         'Sesión cerrada',
  //         'success'
  //     );
  //     this.route.navigate(['/']);
  // }
  //
  // items() {
  //     ConfigGlobal.setProject(this.selectedProject);
  //     this.route.navigate(['items']);
  // }
  //
  // modules() {
  //     ConfigGlobal.setProject(this.selectedProject);
  //     this.route.navigate(['modules']);
  // }
}

