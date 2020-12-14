import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    console.log('regresar');
    this.router.navigateByUrl('/admin/inicio')
  }

  cerrarSesion(){
    console.log('cerrar sesion');
    this.userService.cerrarSesion();
    this.router.navigateByUrl('/');
  }

}
