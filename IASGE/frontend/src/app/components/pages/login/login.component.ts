import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService, private router : Router) {}

  ngOnInit(): void {

    this.auth.isLogin();

  }

  login()
  {
    if(this.email == '')
    {
      alert('Por favor, digite o email');
      return '';
    }

    if(this.password == '')
    {
      alert('Por favor digite a senha');
      return '';
    }

    const email_formated = `${this.email.toLowerCase()}@iasge.com`
    this.auth.login(email_formated,this.password);
    this.email = '';
    this.password = '';
    return '';
  }

  getUser()
  {
    console.log(this.auth.readUser())
  }

}
