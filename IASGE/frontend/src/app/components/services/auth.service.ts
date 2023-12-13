import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth : AngularFireAuth, 
    private router : Router,
    private firestore : AngularFirestore
    ) { }
  
  // login metodo
  login(email : string, password: string)
  {

    this.fireauth.signInWithEmailAndPassword(email,password)
    .then(() =>
    {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home'])
    }, err => 
    {
      alert(err.message);
      this.router.navigate(['login']);
    })
  }

  readUser(): Observable<any>
  {
    return this.firestore.collection('Users').snapshotChanges();
  }

  // register metodo
  register(email: string, password: string)
  {
    this.fireauth.createUserWithEmailAndPassword(email,password)
    .then(() =>
    {
      alert('Register correct');
      this.router.navigate(['login'])
    }, err => 
    {
      alert(err.message);
      this.router.navigate(['register']);
    })
  }

  // Logout
  logout() 
  {
    this.fireauth.signOut()
    .then(() =>
    {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }, err =>
    {
      alert(err.message);
    })
  }

  // Segurança
  auth_guard()
  {
    this.fireauth.onAuthStateChanged(user =>
      {
        if(!user)
        {
          this.logout()
        }
      })
  }
  // Login
  isLogin()
  {
    this.fireauth.onAuthStateChanged(user =>
      {
        if(user)
        {
          localStorage.setItem('token', 'true');
          this.router.navigate(['home'])
        }
      })
  }
}
