
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaServiceService {

   baseURL = "http://localhost:8080/venda";

  constructor(private httpClient : HttpClient) { }

  addVenda(venda: Venda) {

    console.log(venda);
    return this.httpClient.post(`${this.baseURL}`, {...venda, vendedorId: venda.vendedor});
  }

  getVendaById(id: String): Observable<Venda> {

    return this.httpClient.get<Venda>(`${this.baseURL}/${id}`);
  }

  getVendedores(): Observable<any> {

    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  ListarVenda(): Observable<Venda[]>{

    return this.httpClient.get<Venda[]>(`${this.baseURL}`);
  }

  atualizarVenda(id: string, venda: Venda):Observable<Venda> {

    return this.httpClient.put<Venda>(`${this.baseURL}/${id}`, {
      ...venda, vendedorId: venda.vendedor
    });
  }

  deletarVenda(id:string): Observable<any> {

    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
