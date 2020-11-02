import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { delay } from 'rxjs/operators';

import { Usuario } from 'src/app/Models/usuario.model';

import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  public formUsuario: FormGroup;
  public usuarioEditar: Usuario;

  public status: Boolean = false;
  public mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ){ 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.cargarUsuario(id);
    })
  }

  cargarUsuario(id:string){
    if(id === undefined){
      return false;
    }
    this.usuarioService.getUsuarioId(id).pipe(delay(100)).subscribe(
      response=>{
        if(!response) this.router.navigateByUrl('admin/usuarios');
        this.usuarioEditar = response;
        const usuarioForm = {
          first_name: response.first_name,
          last_name: response.last_name,
          email: response.last_name,
          password: response.password,
          role: response.role
        }

        this.formUsuario.setValue(usuarioForm);
      }
    )
  }

  crearFormulario(){
    this.formUsuario = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(4)]],
      role: ['', Validators.required]
    })
  }

  onUsuarioForm(){
    const params = this.activatedRoute.snapshot.params;

    if(this.formUsuario.invalid){
      return Object.values( this.formUsuario.controls ).forEach( control => { control.markAsTouched(); });
    }else{
      console.log(this.formUsuario.value);
    }
  }

}
