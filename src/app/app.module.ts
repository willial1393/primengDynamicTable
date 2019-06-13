import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {CodeHighlighterModule, DialogModule, DropdownModule, EditorModule, MultiSelectModule, TabViewModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { SilubComponent } from './components/silub/silub.component';
import { JovitaComponent } from './components/jovita/jovita.component';

@NgModule({
    declarations: [
        AppComponent,
        SilubComponent,
        JovitaComponent
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
        RouterModule.forRoot([]),
        DialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
