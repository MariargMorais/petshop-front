import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProdutos(): Observable<Produto[]> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Erro: Nenhum token encontrado.');
      return of([]);
    }

    console.log('Enviando token no cabeçalho:', token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Produto[]>(this.apiUrl, { headers });
  }
}
