import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component'

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('./child-routes.module').then( m => m.ChildAdminRoutesModule )
   
    }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}