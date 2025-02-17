import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-cards',
  standalone: true,
  templateUrl: './produto-cards.component.html',
  styleUrl: './produto-cards.component.css',
  imports: [CommonModule],
})
export class ProdutoCardsComponent {
  @Input() product!: { nome: string; descricao: string; preco: number; imagem: string };
}
