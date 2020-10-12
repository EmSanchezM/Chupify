import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesHomeModule } from './Pages/home/home.module';
import { PagesAdminModule } from './Pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesHomeModule,
    PagesAdminModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
