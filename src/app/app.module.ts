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
  OverlayPanelModule,
  PasswordModule,
  SliderModule,
  TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {TableModule} from 'primeng/table';
import {AppGlobal} from './utilities/app-global';
import {LoginComponent} from './components/login/login.component';
import {DynamicTableComponent} from './components/dynamic-table/dynamic-table.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
import {CurrencyMaskModule} from 'ngx-currency-mask';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DynamicTableComponent,
    NavbarComponent,
    UsuariosComponent
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
    MenubarModule,
    OverlayPanelModule,
    SliderModule,
    CurrencyMaskModule
  ],
  providers: [
    MessageService,
    AppGlobal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
