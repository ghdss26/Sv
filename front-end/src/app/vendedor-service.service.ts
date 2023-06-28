import { Vendedor } from './vendedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorServiceService {

  baseURL = "http://localhost:8080/vendedor"

  constructor(private httpClient: HttpClient) {
  }

  addVendedor(vendedor : Vendedor){

    console.log(vendedor);
    return this.httpClient.post(`${this.baseURL}`, vendedor);
  }

  ListarVendedores(): Observable<Vendedor[]>{

    return this.httpClient.get<Vendedor[]>(`${this.baseURL}`);
  }

  getVendedorById(id: String): Observable<Vendedor> {

    return this.httpClient.get<Vendedor>(`${this.baseURL}/${id}`);
  }

  getVendedores():Observable<Vendedor[]>{

    return this.httpClient.get<Vendedor[]>(`${this.baseURL}`);
  }

  atualizarVendedorData(vendedor: Vendedor) : Observable<Vendedor> {

    return this.httpClient.put<Vendedor>(`${this.baseURL}/${vendedor.id}`, vendedor);

  }

  deletarVendedor(id: string): Observable<any> {

    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
