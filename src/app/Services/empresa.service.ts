import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Empresa } from 'src/app/Models/empresa.model';

const API_URL = environment.API;

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public headers: HttpHeaders;
  public empresas: Empresa[] = [];
  public empresa: Empresa;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getAllEmpresas(): Observable<any>{
    return this.http.get(`${API_URL}/empresas`, {headers: this.headers}).pipe(
      map((empresas: Empresa[])=>{
        console.log('EMPRESAS ', empresas)
        return this.empresas = empresas;
      }),
      catchError(error=>{ return throwError('ERROR al obtener empresas ', error)})
    )
  }

  getEmpresaId(id:string): Observable<any>{
    return this.http.get(`${API_URL}/empresas/${id}`, {headers: this.headers}).pipe(
      map((empresa: Empresa)=> this.empresa = empresa),
      catchError(error=>{return throwError('ERROR al obtener empresa por id', error)})
    );
  }

  agregarEmpresa(empresa: Empresa){
    const { name, rubro, tienda, usuario, plan_pago } = empresa
    const { first_name, last_name, email, password, role } = usuario;

    let empresaInsertar = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: role.name,
      name: name,
      rubro: rubro,
      tienda: tienda,
      planpay: plan_pago.name
    }

    let params = JSON.stringify(empresaInsertar);
    
    return this.http.post(`${API_URL}/empresas`, params, {headers: this.headers}).pipe(
      map(response=> response),
      catchError(error=> throwError('ERROR al agregar empresa', error))
    )
  }

  actualizarEmpresa(empresa: Empresa, id:string){
    const { name, rubro, tienda, usuario, plan_pago } = empresa
    const { first_name, last_name, email, password, role } = usuario;

    let empresaActualizar = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: role.name,
      name: name,
      rubro: rubro,
      tienda: tienda,
      pago: plan_pago.name
    }
    let params = JSON.stringify(empresaActualizar);
    return this.http.put(`${API_URL}/empresas/${id}`, params, {headers: this.headers}).pipe(
      map(response=>{
        return response;
      }),
      catchError(error=>{
        return throwError('ERROR al actualizar empresa', error);
      })
    )
  }

  borrarEmpresa(id: string){
    return this.http.delete(`${API_URL}/empresas/${id}`, {headers: this.headers}).pipe(
      map(response=>{
        return response;
      }),
      catchError(error=>{
        return throwError('ERROR al borrar empresa', error);
      })
    )
  }


}
