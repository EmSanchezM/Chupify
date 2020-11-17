import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedHomeModule } from '../../Components/shared.module';

import { AdminCompaniesComponent } from './admin-companies.component';
import { ArchivosComponent } from './archivos/archivos.component';


@NgModule({
    declarations: [
        AdminCompaniesComponent,
        ArchivosComponent
    ],
    exports: [
        AdminCompaniesComponent,
        ArchivosComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedHomeModule
    ]
})
export class PagesAdminCompaniesModule { }