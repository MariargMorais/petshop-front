import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-detalhes-produtos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './detalhes-produtos.component.html',
  styleUrl: './detalhes-produtos.component.css'
})
export class DetalhesProdutosComponent {

}
