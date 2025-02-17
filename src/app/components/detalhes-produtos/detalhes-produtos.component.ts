import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProdutoCardsComponent } from "../produto-cards/produto-cards.component";
import { IProduto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-detalhes-produtos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProdutoCardsComponent],
  templateUrl: './detalhes-produtos.component.html',
  styleUrl: './detalhes-produtos.component.css'
})
export class DetalhesProdutosComponent {
@Input() product: IProduto = { } as IProduto;
}
