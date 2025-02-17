import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Medico {
  id: string;
  nome: string;
  crm: string;
}

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfissionais(): Observable<Medico[]> {
    const token = this.authService.getToken();
    console.log('Token enviado:', token);
  
    if (!token) {
      console.error('Erro: Nenhum token encontrado.');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.get<Medico[]>(`${this.apiUrl}/medicos`, { headers });
  }

  criarAgendamento(medicoId: string, clienteId: string, valor: number): Observable<any> {
    const token = sessionStorage.getItem('token'); // Recupera o token do usuário logado

    if (!token) {
      console.error('Erro: Nenhum token encontrado. O usuário está logado?');
      return new Observable();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = {
      cliente: { id: clienteId },
      medico: { id: medicoId },
      total: valor
    };

    return this.http.post(`${this.apiUrl}/consultas`, body, { headers });
  }
}
