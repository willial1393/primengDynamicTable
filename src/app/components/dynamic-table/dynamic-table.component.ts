import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @Input() cols: any[];
  @Input() data: any[];
  @Output() onStoreRow = new EventEmitter<any>();
  @Output() onDeleteRow = new EventEmitter<any>();

  displayDialog: boolean;
  selectedRow: any;
  row: any;

  constructor(private messageService: MessageService,
              private sanitizer: DomSanitizer) {
    // this.cols = [
    //   {field: 'name', header: 'Nombre', type: 'text', required: true},
    //   {field: 'type', header: 'Tipo', type: 'text', required: true},
    //   {field: 'image', header: 'Imagen', type: 'image', required: true},
    //   {field: 'url', header: 'Url', type: 'text', required: true},
    //   {field: 'description', header: 'Descripción', type: 'text-area', required: true},
    //   {
    //     field: 'state', header: 'Estado', type: 'select'
    //     , options: res['response'], label: 'name', required: true
    //   }
    // ];
  }

  ngOnInit() {
  }

  onUpload(event, row: any, form) {
    const reader = new FileReader();
    reader.readAsDataURL(event.files[0]);
    reader.onload = (_event) => {
      row.image = reader.result.toString();
    };
    form.clear();
  }

  openToast() {
    this.messageService.add({
      key: 'c',
      severity: 'warn',
      summary: '¿Eliminar?',
      detail: ''
    });
  }

  closeToast() {
    this.messageService.clear('c');
  }

  showDialogToAdd() {
    this.selectedRow = null;
    this.row = {};
    this.displayDialog = true;
  }

  save() {
    this.onStoreRow.emit(this.row);
    this.displayDialog = false;
    this.row = null;
  }

  delete() {
    this.displayDialog = false;
    this.closeToast();
    this.onDeleteRow.emit(this.selectedRow);
  }

  onRowSelect(event) {
    this.row = this.cloneProject(event.data);
    this.displayDialog = true;
  }

  cloneProject(p: any): any {
    const project = {};
    for (const prop of Object.keys(p)) {
      project[prop] = p[prop];
    }
    return project;
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
