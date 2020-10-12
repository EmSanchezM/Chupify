import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistroComponent} from './auth/registro/registro.component';

const childHomeRoutes: Routes = [
    {
        path: '',
        component: IndexPageComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(childHomeRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildHomeRoutesModule { }