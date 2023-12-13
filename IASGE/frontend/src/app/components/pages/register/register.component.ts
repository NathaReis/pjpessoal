import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nome : string = '';
  password : string = '';

  constructor(private auth : AuthService) {}

  registrar()
  {
    if(this.nome == '')
    {
      alert('Por favor, digite o nome.sobrenome');
      return '';
    }

    if(this.password == '')
    {
      alert('Por favor digite a senha');
      return '';
    }

    const nome_formated = `${this.nome.toLowerCase()}@iasge.com`
    this.auth.register(nome_formated,this.password);
    
    this.nome = '';
    this.password = '';
    return '';
  }
}
