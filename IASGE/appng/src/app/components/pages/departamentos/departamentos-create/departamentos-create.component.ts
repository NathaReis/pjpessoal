import { Component } from '@angular/core';
import { DataService } from 'src/app/components/services/data.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-departamentos-create',
  templateUrl: './departamentos-create.component.html',
  styleUrls: ['./departamentos-create.component.css']
})
export class DepartamentosCreateComponent {

  hide = true;

  constructor( 
    private data : DataService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Departamentos',
      icon: 'house',
      routerLink: 'departamentos'
    }
  }
  userObj = {
    id: '',
    first_name: '',
    last_name: '',
    password: '',
    perfil: '',
    user_name: '',
  }
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  password: string = '';
  perfil: string = '';
  user_name: string = '';

  resetForm()
  {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.password = '';
    this.perfil = '';
    this.user_name = '';
  }

  addUser()
  {
    if(this.first_name == '' || this.last_name == '' || this.password == '' || this.perfil == '')
    {
      alert('Preencha todos os campos');
    }
    else 
    {
      this.userObj.id = '';
      this.userObj.first_name = this.first_name;
      this.userObj.last_name = this.last_name;
      this.userObj.password = this.password;
      this.userObj.perfil = this.perfil;
      this.userObj.user_name = `${this.first_name.toLowerCase()}.${this.last_name.toLowerCase()}`;
      this.data.addUser(this.userObj)
      this.resetForm()
    }
  }

}
