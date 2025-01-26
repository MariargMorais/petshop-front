import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProdutoCardsComponent } from '../produto-cards/produto-cards.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    ProdutoCardsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  products = [
    { name: 'Bolinha', price: 50.0 },
    { name: 'Cobrinha', price: 50.0 },
  ];
}
