import { Component } from '@angular/core';
import { DataService } from 'src/app/components/services/data.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-departamentos-create',
  templateUrl: './departamentos-create.component.html',
  styleUrls: ['./departamentos-create.component.css']
})
export class DepartamentosCreateComponent {

  constructor( private data : DataService ) {}

  userObj = {
    id: '',
    first_name: '',
    last_name: '',
    password: '',
    perfil: '',
  }
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  password: string = '';
  perfil: string = '';

  resetForm()
  {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.password = '';
    this.perfil = '';
  }

  addUser()
  {
    if(this.first_name == '' || this.last_name == '' || this.password == '' || this.perfil == '')
    {
      alert('Preencha todos os dados');
    }

    this.userObj.id = '';
    this.userObj.first_name = this.first_name;
    this.userObj.last_name = this.last_name;
    this.userObj.password = this.password;
    this.userObj.perfil = this.perfil;

    //this.data.addUser(this.userObj)
    //this.resetForm()
  }

}
