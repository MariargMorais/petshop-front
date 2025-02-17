import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  fazerLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Resposta do backend:', response);
        
        if (response.token && response.id) {
          this.authService.saveUserData(response.id, response.token);
          console.log('Login bem-sucedido, ID e token salvos!'); 
        } else {
          console.error('Erro: ID ou Token não encontrados na resposta.');
        }
      },
      (error) => {
        console.error('Erro no login', error);
      }
    );
  }
}
