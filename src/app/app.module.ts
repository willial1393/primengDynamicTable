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
    InputTextModule,
    MessageService,
    MultiSelectModule,
    PasswordModule,
    TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {CommonModule} from '@angular/common';
import {SilubComponent} from './components/silub/silub.component';
import {JovitaComponent} from './components/jovita/jovita.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import {TableModule} from 'primeng/table';


@NgModule({
    declarations: [
        AppComponent,
        SilubComponent,
        JovitaComponent,
        HomeComponent,
        AdminComponent
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
        TableModule
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
