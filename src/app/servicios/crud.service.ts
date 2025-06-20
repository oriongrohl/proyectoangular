import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'https://api.ejemplo.com/alumnos'; // Cambia por la tuya

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearAlumno(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizarAlumno(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  borrarAlumno(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
