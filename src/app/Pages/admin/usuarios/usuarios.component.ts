import { Component, OnInit } from '@angular/core';
/*MODELOS */
import { Usuario } from 'src/app/Models/usuario.model';
import { UsuarioAll } from 'src/app/Models/usuario.interface';
/*SERVICIOS*/
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public status: Boolean = false;
  public mensaje:string = '';
  public usuarios: UsuarioAll[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe(response=>{
      console.log(response['role']);
     
      this.usuarios = response;
    }) 
  }

  borrarUsuario(usuario: UsuarioAll){
    this.usuarioService.borrarUsuario(usuario._id).subscribe(
      response=>{
        console.log(response)
        if(response['ok']){
          this.status = true;
          this.mensaje = `${response['message']} exitosamente!`;
        }
        this.getUsuarios();
      },
      error=>{
        this.status = false;
        this.mensaje = `${error}`
      }
    )
  }

  
}
