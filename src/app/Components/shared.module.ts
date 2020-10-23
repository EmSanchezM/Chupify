  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*Componentes de la landing page*/ 
import { HeaderComponent } from './landing-page/header/header.component';
import { BannerComponent } from './landing-page/banner/banner.component';
import { CardTiendasComponent } from './landing-page/card-tiendas/card-tiendas.component';
import { PreciosComponent } from './landing-page/precios/precios.component';
import { FooterComponent } from './landing-page/footer/footer.component';

/*Componentes de dashboard admin*/
import { HeaderAdminComponent } from './dashboard-page/header/header.component';
import { SidebarComponent } from './dashboard-page/sidebar/sidebar.component'; 


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        /*Landing Page*/ 
        HeaderComponent, 
        BannerComponent, 
        CardTiendasComponent,
        PreciosComponent,
        FooterComponent,
        /*Dashboard Page*/ 
        HeaderAdminComponent,
        SidebarComponent,
         
    ],
    exports: [
        HeaderComponent, 
        BannerComponent, 
        CardTiendasComponent,
        PreciosComponent,
        FooterComponent,

        HeaderAdminComponent,
        SidebarComponent
    ],
})
export class SharedHomeModule { }