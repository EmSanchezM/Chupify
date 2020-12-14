import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {

  routes:any = [
    {
      path: 'archivos',
      icono: 'file-add',
      tema:'fill',
      titulo: 'Gestión de archivos'    
    },
    {
      path:'paginas',
      icono: 'html5',
      tema:'fill',
      titulo: 'Gestión de páginas'
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
