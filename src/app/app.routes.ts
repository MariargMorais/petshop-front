import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'detalhesProduto', component: DetalhesProdutosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'produtos', component: ProdutosComponent }
];
