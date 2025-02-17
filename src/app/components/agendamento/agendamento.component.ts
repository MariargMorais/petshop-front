import { Component, OnInit  } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AgendamentoService } from '../../services/agendamento.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css'
})

export class AgendamentoComponent implements OnInit {
  profissionais: any[] = [];
  tipoAgendamento = 'Consulta';
  profissionalSelecionado = '';
  clienteId = '';
  dataSelecionada = '';
  horarioSelecionado = '';
  valorFixo = 150;

  constructor(private agendamentoService: AgendamentoService, private authService: AuthService) {}

  ngOnInit() {
    this.carregarProfissionais();
    this.recuperarClienteLogado();
  }

  carregarProfissionais() {
    this.agendamentoService.getProfissionais().subscribe(
      (data) => {
        this.profissionais = data;
      },
      (error) => console.error('Erro ao buscar profissionais', error)
    );
  }

  recuperarClienteLogado() {
    this.clienteId = this.authService.getUserId();
  
    if (!this.clienteId) {
      console.error('Erro: Nenhum cliente logado.');
    } else {
      console.log('Cliente logado (ID):', this.clienteId);
    }
  }

  agendarConsulta() {
    console.log('Profissional selecionado:', this.profissionalSelecionado);
    console.log('Cliente logado (ID):', this.clienteId);
    if (!this.profissionalSelecionado || !this.clienteId) {
      alert('Por favor, selecione um profissional e faça login.');
      return;
    }

    this.agendamentoService.criarAgendamento(this.profissionalSelecionado, this.clienteId, this.valorFixo).subscribe(
      (response) => {
        console.log('Agendamento realizado com sucesso!', response);
        alert('Consulta agendada com sucesso!');
      },
      (error) => {
        console.error('Erro ao agendar consulta', error);
        alert('Erro ao agendar consulta.');
      }
    );
  }
}
