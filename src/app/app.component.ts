import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'landing-items';
    public styleCards = {
        maxwidth: '300px',
        backgroundColor: 'rgba(173,173,173,0.12)',
        color: 'white'
    };
    displayLoading = false;

    constructor(private messageService: MessageService) {
    }

    closeMessage() {
        this.messageService.clear('messageDialog');
    }

    showToast(title: string, message: string, type: string) {
        this.messageService.add({
            key: 'toast',
            severity: type,
            summary: title,
            detail: message
        });
    }

    showMessage(title: string, message: string, type: string) {
        this.messageService.add({
            key: 'messageDialog',
            severity: type,
            summary: title,
            detail: message
        });
    }

    showErrorService(errorMessage) {
        this.messageService.add({
            key: 'messageDialog',
            severity: 'error',
            summary: '',
            detail: errorMessage['error'],
            life: 60000
        });
    }

    showLoading(value: boolean) {
        this.displayLoading = value;
    }
}
