import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*Interfaces y clases*/
import { EmpresaRegistro } from 'src/app/Models/empresa.model';
import { Usuario } from 'src/app/Models/usuario.model';
import { UsuarioAll } from 'src/app/models/usuario.interface';

const API_URL = environment.API;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public headers: HttpHeaders;
  public userToken: string;
  public usuariosAll: UsuarioAll[] = [];
  public usuarios: Usuario[] = [];
  public usuario: Usuario;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getAllUsuarios(): Observable<any>{
    return this.http.get(`${API_URL}/usuarios`, {headers: this.headers}).pipe(
      map((usuarios: UsuarioAll[])=> {
        
        return this.usuariosAll = usuarios
        
      }),
      catchError(error=>{return throwError('ERROR al obtener usuarios', error)})
    )
  }

  getUsuarioId(id:string): Observable<any>{
    return this.http.get(`${API_URL}/usuarios/${id}`, {headers: this.headers}).pipe(
      map((usuario: Usuario)=> this.usuario = usuario),
      catchError(error=>{return throwError('ERROR al obtener usuario por id', error)})
    );
  }

  getUsuarioEmail(email: string):Observable<any>{
    return this.http.get(`${API_URL}/buscar/${email}`, {headers: this.headers}).pipe(
      map((usuarios: Usuario[])=> this.usuarios = usuarios),
      catchError(error=>{ return throwError('ERROR al obtener email', error) })
    );
  }

  registroUsuarioEmpresa(empresa: EmpresaRegistro): Observable<any>{
    let params = JSON.stringify(empresa)
    return this.http.post(`${API_URL}/auth/registro`, params, {headers: this.headers}).pipe(
      map(response=> {

        return response;
      }),
      catchError(error=>{
        console.log('error', error.message)
        return throwError('ERROR al registrar empresa');
      })
    );
  }

  iniciarSesion(login: Usuario){
    let params = JSON.stringify(login);
    return this.http.post(`${API_URL}/auth/login`, params, {headers: this.headers}).pipe(
      map(response=>{
        this.guardarToken(response['token']);
        this.usuario = response['userFound'];
        this.usuario.token = response['token'];
        return this.usuario;
      }),
      catchError(error=>{
        return throwError('ERROR al iniciar sesion', error);
      })
    )
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  private guardarToken(token: string){
    this.userToken = token;
    localStorage.setItem('token', token);

    /*let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());*/
  }

  private leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  actualizarUsuario(usuario: UsuarioAll){
    let params = JSON.stringify(usuario);
    return this.http.put(`${API_URL}/usuarios/${usuario._id}`, params, {headers: this.headers}).pipe(
      map(response=>{
        return response;
      }),
      catchError(error=>{
        return throwError('ERROR al actualizar usuario', error);
      })
    )
  }

  borrarUsuario(id: string){
    //this.headers = this.headers.append('Authorization','x-token'+this.usuario.token);
    return this.http.delete(`${API_URL}/usuarios/${id}`, {headers: this.headers}).pipe(
      map(response=>{
        return response;
      }),
      catchError(error=>{
        return throwError('ERROR al borrar usuario', error);
      })
    )
  }

}
