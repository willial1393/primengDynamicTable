import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {
  CodeHighlighterModule,
  DialogModule,
  DropdownModule,
  EditorModule,
  FileUploadModule,
  InputTextareaModule,
  InputTextModule,
  LightboxModule,
  MenubarModule,
  MessageService,
  MultiSelectModule,
  PasswordModule,
  TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import {TableModule} from 'primeng/table';
import {AppGlobal} from './utilities/app-global';
import {LoginComponent} from './components/login/login.component';
import {DynamicTableComponent} from './components/dynamic-table/dynamic-table.component';
import {NavbarComponent} from './components/navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
      LoginComponent,
      DynamicTableComponent,
      NavbarComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    CommonModule,
    DropdownModule,
    SplitButtonModule,
    ToastModule,
    TabViewModule,
    CodeHighlighterModule,
    MultiSelectModule,
    EditorModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    AppRoutingModule,
    TableModule,
    FileUploadModule,
    InputTextareaModule,
    LightboxModule,
    MenubarModule
  ],
    providers: [
        MessageService,
        AppGlobal
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
