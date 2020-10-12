import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgModel, NgControl } from '@angular/forms';

import { SharedHomeModule } from '../../Components/shared.module';

import { HomeComponent } from './home.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

@NgModule({
    declarations: [
        HomeComponent,
        IndexPageComponent,
        LoginComponent,
        RegistroComponent,
    ],
    exports: [
        HomeComponent,
        IndexPageComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedHomeModule
    ]
})
export class PagesHomeModule { }