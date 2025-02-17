import { Component, Input } from '@angular/core';
import { IProduto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-produto-cards',
  standalone: true,
  imports: [],
  templateUrl: './produto-cards.component.html',
  styleUrl: './produto-cards.component.css',
})
export class ProdutoCardsComponent {
  @Input() product: IProduto = {} as IProduto;
}
