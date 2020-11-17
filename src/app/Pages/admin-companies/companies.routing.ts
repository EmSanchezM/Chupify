import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminCompaniesComponent } from './admin-companies.component';

const routes: Routes = [
    {
        path: 'admin-companies',
        component: AdminCompaniesComponent,
        loadChildren: () => import('./child-routes.module').then( m => m.ChildAdminCompaniesRoutesModule )
    }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminCompaniesRoutingModule {}