import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

class Car {
    vin: string;
    year: string;
    brand: string;
    color: string;
}

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    displayDialog: boolean;

    car: Car = new Car();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[] = [];

    cols: any[];

    constructor(private messageService: MessageService) {
    }


    openToast() {
        this.messageService.add({
            key: 'c',
            severity: 'warn',
            summary: '¿Desea eliminar el proyecto?',
            detail: ''
        });
    }

    closeToast() {
        this.messageService.clear('c');
    }

    ngOnInit() {

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new Car();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.cars.indexOf(this.selectedCar)] = this.car;
        }

        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
        this.closeToast();
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        const car = new Car();
        for (const prop of Object.keys(c)) {
            car[prop] = c[prop];
        }
        return car;
    }
}
