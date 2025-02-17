import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProdutoCardsComponent } from '../produto-cards/produto-cards.component';
import { IProduto } from '../../interfaces/produto.interface';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    ProdutoCardsComponent,
    NgFor,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  @Input() products: IProduto = { } as IProduto;
}
