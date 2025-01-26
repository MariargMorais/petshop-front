import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto-cards',
  standalone: true,
  imports: [],
  templateUrl: './produto-cards.component.html',
  styleUrl: './produto-cards.component.css',
})
export class ProdutoCardsComponent {
  @Input() product!: { name: string; price: number };
}