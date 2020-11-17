import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule } from './Pages/home/home.routing';
import { AdminRoutingModule } from './Pages/admin/admin.routing';
import { AdminCompaniesRoutingModule } from './Pages/admin-companies/companies.routing';

const routes: Routes = [

];

@NgModule({
  imports: [
    HomeRoutingModule,
    AdminRoutingModule,
    AdminCompaniesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
