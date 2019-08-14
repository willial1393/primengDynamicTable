import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import {AppGlobal} from './utilities/app-global';
import {NavigationStart, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-modules';
  public styleCards = {
    maxwidth: '300px',
    backgroundColor: 'rgba(173,173,173,0.12)',
    color: 'white'
  };
  displayLoading = false;
  showNavbar = false;

  constructor(private messageService: MessageService,
              private router: Router) {
    this.routeEvent(this.router);
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      this.showNavbar = AppGlobal.getUserLogin() !== null;
      if (e instanceof NavigationStart) {
        if (e.url === '/' && AppGlobal.getUserLogin() !== null) {
          router.navigate(['home']);
        }
      }
    });
  }

  closeMessage() {
    this.messageService.clear('messageDialog');
  }

  // type: [success, warn, info, error]
  showToast(title: string, message: string, type: string) {
    this.showLoading(false);
    this.messageService.add({
      key: 'toast',
      severity: type,
      summary: title,
      detail: message
    });
  }

  // type: [success, warn, info, error]
  showMessage(title: string, message: string, type: string) {
    this.showLoading(false);
    this.messageService.add({
      key: 'messageDialog',
      severity: type,
      summary: title,
      detail: message,
      sticky: true
    });
  }

  showErrorService(errorMessage) {
    this.showLoading(false);
    this.messageService.add({
      key: 'messageDialog',
      severity: 'error',
      summary: '',
      detail: errorMessage['error'],
      life: 60000,
      sticky: true
    });
  }

  showErrorCatch(error) {
    this.showLoading(false);
    this.messageService.add({
      key: 'messageDialog',
      severity: 'error',
      summary: '',
      detail: error,
      life: 60000,
      sticky: true
    });
  }

  showLoading(value: boolean) {
    this.displayLoading = value;
  }
}
