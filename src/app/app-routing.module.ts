import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutingModule } from './Pages/home/home.routing';
import { AdminRoutingModule } from './Pages/admin/admin.routing';

const routes: Routes = [

];

@NgModule({
  imports: [
    HomeRoutingModule,
    AdminRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
