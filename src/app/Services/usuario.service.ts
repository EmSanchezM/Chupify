import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*Interfaces y clases*/
import { EmpresaRegistro } from 'src/app/Models/empresa.model';

const API_URL = environment.API;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
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
