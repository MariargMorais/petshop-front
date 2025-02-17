<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> c75441d277052b718f39fed5f5836972c3dd76ca
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProdutoCardsComponent } from '../produto-cards/produto-cards.component';
<<<<<<< HEAD
import { IProduto } from '../../interfaces/produto.interface';
import { CommonModule, NgFor } from '@angular/common';
=======
import { ProdutoService, Produto } from '../../services/produto.service';
>>>>>>> c75441d277052b718f39fed5f5836972c3dd76ca

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterLink,
    ProdutoCardsComponent,
    NgFor,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
<<<<<<< HEAD
export class LandingComponent {
  @Input() products: IProduto = { } as IProduto;
=======
export class LandingComponent implements OnInit {
  products: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (data) => (this.products = data),
      (error) => console.error('Erro ao buscar produtos', error)
    );
  }
>>>>>>> c75441d277052b718f39fed5f5836972c3dd76ca
}
