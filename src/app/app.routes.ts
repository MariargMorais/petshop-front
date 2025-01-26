import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { DetalhesProdutosComponent } from './components/detalhes-produtos/detalhes-produtos.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'detalhesProduto', component: DetalhesProdutosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LandingComponent },
  { path: 'produtos', component: ProdutosComponent }
];
