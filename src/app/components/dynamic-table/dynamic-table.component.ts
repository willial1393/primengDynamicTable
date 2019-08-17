import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import exportFromJSON from 'export-from-json';
import * as moment from 'moment';
import {isNumeric} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @Input() cols: any[];
  @Input() data: any[];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onStoreRow = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteRow = new EventEmitter<any>();

  displayDialog: boolean;
  selectedRow: any;
  row: any;

  defaultLabel = 'Todo';

  objectsData: any[] = [];
  optionsCurrencyMask = {precision: 0, align: 'left', decimal: ',', thousands: '.', allowNegative: false};

  constructor(private messageService: MessageService,
              private sanitizer: DomSanitizer) {
    // this.cols = [
    //   {field: 'name', header: 'Nombre', type: 'text', required: true},
    //   {field: 'type', header: 'Tipo', type: 'text', required: true},
    //   {field: 'image', header: 'Imagen', type: 'image', required: true},
    //   {field: 'url', header: 'Url', type: 'text', required: true},
    //   {field: 'url', header: 'Url', type: 'number', required: true},
    //   {field: 'url', header: 'Url', type: 'money', required: true},
    //   {field: 'description', header: 'Descripción', type: 'text-area', required: true},
    //   {
    //     field: 'state', header: 'Estado', type: 'select'
    //     , options: res['response'], label: 'name', required: true
    //   },
    //   {
    //     field: 'state', header: 'Estado', type: 'multiselect'
    //     , options: res['response'], label: 'name', required: true
    //   }
    // ];
  }

  ngOnInit() {
    setTimeout(() => {
      for (const col of this.cols) {
        if (col.type === 'number' || col.type === 'money') {
          const values: number[] = this.data.map((x) => {
            return x[col.field];
          });
          col.min = Math.min(...values);
          col.max = Math.max(...values);
          col.values = [col.min, col.max];
        }
        if (col.type === 'select') {
          const obj = {};
          obj[col.label] = this.defaultLabel;
          col.options = [obj].concat(col.options);
          this.objectsData.push(col);
        }
      }
    }, 1000);
  }

  onFilterNumberChange($event, dt, col) {
    let values = this.data.filter(x => x[col.field] >= $event.values[0] && x[col.field] <= $event.values[1]);
    values = values.map((x) => {
      return x[col.field];
    });
    dt.filter(values, col.field, 'in');
  }

  onFilterSelectChange($event, dt, col) {
    if ($event.value) {
      if ($event.value[col.label] === this.defaultLabel) {
        dt.filter(null, col.field + '.' + col.label, 'equals');
      } else {
        dt.filter($event.value[col.label], col.field + '.' + col.label, 'equals');
      }
    } else {
      dt.filter(null, col.field, 'equals');
    }
  }

  onFilterMultiselectChange($event, dt, col) {
    if ($event.value) {
      if ($event.value[col.label] === this.defaultLabel) {
        dt.filter(null, col.field + '.' + col.label, 'in');
      } else {
        dt.filter($event.value.map((x) => {
          return x[col.label];
        }), col.field + '.' + col.label, 'in');
      }
    } else {
      dt.filter(null, col.field, 'in');
    }
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

  export(dt) {
    let list: any[] = [];
    if (dt.filteredValue) {
      list = JSON.parse(JSON.stringify(dt.filteredValue));
    } else {
      list = JSON.parse(JSON.stringify(this.data));
    }
    const type: any = exportFromJSON.types.xls;
    exportFromJSON({
      data: list.map((x) => {
        for (const od of this.objectsData) {
          if (x[od.field]) {
            x[od.field] = x[od.field][od.label];
          }
        }
        return x;
      }),
      fileName: 'TOOLBOXCENTER ' + moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      exportType: type
    });
  }

  sortNumber($event) {
    $event.data.sort((data1, data2) => {
      const value1 = data1[$event.field];
      const value2 = data2[$event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else {
        if (isNumeric(value1)) {
          result = (Number(value1) < Number(value2)) ? -1 : (Number(value1) > Number(value2)) ? 1 : 0;
        } else {
          result = value1.localeCompare(value2);
        }
      }

      return ($event.order * result);
    });
  }
}
