import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { delay } from 'rxjs/operators';

import { Usuario } from 'src/app/Models/usuario.model';
import { Role } from 'src/app/Models/role.model';

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
  public statusCRUD: string = '';

  public roles: any[] = [
    {key: 0, rolName: 'USER_ROLE'},
    {key: 1, rolName:'EMPRESA_ROLE'},
    {key: 2, rolName:'ADMIN_ROLE'}
  ]

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

        let index = 0;
        for(let i=0; i<this.roles.length; i++){
          
          if(this.roles[i]['rolName'] == response.role['name']){
            index = this.roles[i]['key'];
          }
        }
        
        const usuarioForm = {
          first_name: response.first_name,
          last_name: response.last_name,
          email: response.email,
          password: response.password,
          role: this.roles[index]['rolName']
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
      password:['',[Validators.required, Validators.minLength(6)]],
      repeatpassword: ['', Validators.required],
      role: new FormControl('', Validators.required)
    })
  }

  onUsuarioForm(){
    const params = this.activatedRoute.snapshot.params;

    if(this.formUsuario.invalid){
      return Object.values( this.formUsuario.controls ).forEach( control => { control.markAsTouched(); });
    }else{
      console.log(this.formUsuario.value);
      const {first_name, last_name, email, password, role} = this.formUsuario.value
      const roleUser = new Role('', role);
      const usuario = new Usuario('',first_name, last_name, email, password, roleUser,'');

      if(params.id){
        let id = params.id;
        
        /*ACTUALIZAMOS USUARIO*/
        this.status = true;
        this.usuarioService.actualizarUsuario(usuario, id).subscribe(
          response=>{
            this.statusCRUD = 'UPDATE';
            this.mensaje = 'Usuario actualizado exitosamente!';
            console.log(response);
          },
          error=>{
            console.error(error);
          }
        )
        this.router.navigateByUrl('admin/usuarios');
      }else{
        this.status = false;
        
        this.usuarioService.agregarUsuario(usuario).subscribe(
          response=>{
            this.statusCRUD = 'AGREGAR';
            this.mensaje = 'Usuario agregado exitosamente!';
            console.log(response);
          },
          error=>{ console.error('ERROR al agregar ', error)}
        )
        this.router.navigateByUrl('admin/usuarios');
      }
    }
  }

  /*first_name, last_name, email, password, role */
  //Validaciones
  get nameNoValido() {
    return this.formUsuario.get('first_name').invalid && this.formUsuario.get('first_name').touched
  }

  get lastNameNoValido() {
    return this.formUsuario.get('last_name').invalid && this.formUsuario.get('last_name').touched
  }
  
  get correoNoValido() {
    return this.formUsuario.get('email').invalid && this.formUsuario.get('email').touched
  }

  get passwordNoValida() {
    return this.formUsuario.get('password').invalid && this.formUsuario.get('password').touched
  }

  get repeatPasswordNoValida() {
    const password = this.formUsuario.get('password').value;
    const repeatpassword = this.formUsuario.get('repeatpassword').value;

    return (password === repeatpassword) ? false : true;
  }

}
