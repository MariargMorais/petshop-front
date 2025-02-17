import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  nome = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService) {}

  fazerCadastro() {
    if (this.password !== this.confirmPassword) {
      console.error('As senhas não coincidem!');
      return;
    }

    const usuario = {
      nome: this.nome,
      email: this.email,
      password: this.password
    };

    console.log('Enviando cadastro:', usuario);

    this.authService.cadastrar(usuario).subscribe(
      (response) => {
        console.log('Cadastro realizado com sucesso:', response);
      },
      (error) => {
        console.error('Erro no cadastro:', error);
      }
    );
  }
}
