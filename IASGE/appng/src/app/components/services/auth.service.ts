import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth : AngularFireAuth, 
    private router : Router,
    private data : DataService
    ) { }
  
  // login metodo
  login(user_name : string, password: string)
  {
    this.data.getAllUsers().subscribe(res =>
      {
        //Mapeia o resultado
        const users = res.map((e: any) =>
          {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          })
        
        //Se user exists or no
        const user = users.filter(user => user.user_name == user_name && user.password == password)
        user.length > 0 
        ? this.logar(user[0])
        : this.logout()
      }, err => 
      {
        //Mensagem de erro
        alert(`Erro de login: ${err}`)
      })
  }

  // Logout
  logout() 
  {
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('logado');
    this.router.navigate(['login']);
  }
  // Login
  logar(user: any) 
  {
    localStorage.setItem('user_name', user.user_name)
    localStorage.setItem('user_id', user.id)
    localStorage.setItem('logado', user.perfil);
    this.router.navigate(['home']);
  }

  // Segurança
  auth_guard()
  {
    if(!localStorage.getItem('logado'))
    {
      this.router.navigate(['login']);
    }
  }
  // Login
  isLogin()
  {
    if(localStorage.getItem('logado'))
    {
      this.router.navigate(['home'])
    }
  }
}
