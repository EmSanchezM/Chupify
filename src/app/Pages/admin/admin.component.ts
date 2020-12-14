import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  routes:any = [
    {
      path: 'inicio',
      icono: 'home',
      tema: 'fill',
      titulo: 'Inicio'    
    },
    {
      path:'usuarios',
      icono: 'user',
      tema: 'outline',
      titulo: 'Usuarios'

    },
    {
      path: 'empresas',
      icono: 'shop',
      tema:'fill',
      titulo: 'Empresas'    
    },
    {
      path: 'planes-pago',
      icono: 'dollar-circle',
      tema:'fill',
      titulo: 'Planes de Pago'    
    },
    {
      path: 'plantillas',
      icono: 'html5',
      tema:'fill',
      titulo: 'Gestion de Plantillas'    
    },
    {
      path:'logout',
      icono:'logout',
      tema: 'outline',
      titulo: 'Cerrar Sesión'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
