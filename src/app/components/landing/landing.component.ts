import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProdutoCardsComponent } from '../produto-cards/produto-cards.component';
import { ProdutoService, Produto } from '../../services/produto.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterLink,
    ProdutoCardsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  products: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (data) => (this.products = data),
      (error) => console.error('Erro ao buscar produtos', error)
    );
  }
}
