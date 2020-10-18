import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaRegistro } from 'src/app/Models/empresa.model';

import { Usuario } from 'src/app/Models/usuario.model';

import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder, private router: Router) { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  get correoNoValido() {
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched
  }

  get passwordNoValida(){
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onLogin(){
    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control=>{control.markAsTouched(); })
    }else{
      console.log(this.loginForm.value)
      const {email, password } = this.loginForm.value
      this.usuario = new Usuario('','', email, password, null,'');
      this.usuarioService.iniciarSesion(this.usuario).subscribe(
        (usuario: Usuario)=>{
          console.log(usuario);
          if(usuario.token){
            this.loginForm.reset();
            const { name } = usuario.role
            if(name==='EMPRESA_ROLE'){
              this.router.navigateByUrl('admin')
            }else if(name==='CLIENTE_ROLE'){
              alert('Soy un cliente')
            }else if(name==='ADMIN_ROLE'){
              alert('soy admin')
            }
          }
        }
      )
    }
  }

}
