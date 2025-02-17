import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = 'http://localhost:8080/api/auth'; // URL base do backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { email, password });
  }

  cadastrar(usuario: any): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, usuario);
  }

  saveToken(token: string) {
    if (typeof window !== 'undefined') {
      console.log('Tentando salvar o token:', token);
      sessionStorage.setItem('token', token);
      console.log('Token salvo com sucesso!');
    } else {
      console.warn('Tentativa de salvar token fora do navegador.');
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token');
      console.log('Token recuperado:', token);
      return token;
    }
    return null;
  }

  saveUserData(id: string, token: string) {
    if (typeof window !== 'undefined') {
      console.log('Salvando dados do usuário:', { id, token });
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('token', token);
    }
  }
  
  getUserId(): string {
    if (typeof window !== 'undefined') {
      const userId = sessionStorage.getItem('id');
      console.log('Recuperando ID do cliente:', userId);
      return userId || '';
    }
    return '';
  }

  logout() {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('token');
    }
  }
}
