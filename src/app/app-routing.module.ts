import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ItemsComponent} from './components/items/items.component';
import {ModulesComponent} from './components/modules/modules.component';
// AuthGuardService
// https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'items',
        component: ItemsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'modules',
        component: ModulesComponent,
        canActivate: [AuthGuardService]
    }
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
