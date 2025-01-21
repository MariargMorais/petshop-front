import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { LoginComponent } from "./login/login.component";
import { ProdutosComponent } from "./produtos/produtos.component";
import { DetalhesProdutosComponent } from "./detalhes-produtos/detalhes-produtos.component";
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petshop-front';
}
