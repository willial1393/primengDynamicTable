import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ]
})
export class AppRoutingModule {
}
