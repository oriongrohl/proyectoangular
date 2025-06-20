import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'https://clients-example-api.fly.dev/swagger#tag/clients'; 

  constructor(private http: HttpClient) {}

  getCliente(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearCliente(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizarCliente(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  borrarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
