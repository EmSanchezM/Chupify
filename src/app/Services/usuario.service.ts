import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*Interfaces y clases*/
import { EmpresaRegistro } from 'src/app/Models/empresa.model';
import { Usuario } from 'src/app/Models/usuario.model';

const API_URL = environment.API;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public headers: HttpHeaders;
  public usuarios: Usuario[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getUsuarioEmail(email: string):Observable<any>{
    return this.http.get(`${API_URL}/buscar/${email}`, {headers: this.headers}).pipe(
      map((usuarios: Usuario[])=> this.usuarios = usuarios),
      catchError(error=>{ return throwError('ERROR al obtener usuarios', error) })
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
}
