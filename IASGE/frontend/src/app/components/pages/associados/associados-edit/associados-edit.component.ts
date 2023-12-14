import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/components/services/data.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-associados-edit',
  templateUrl: './associados-edit.component.html',
  styleUrls: ['./associados-edit.component.css']
})
export class AssociadosEditComponent implements OnInit{
  
  constructor( 
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Associados',
      icon: 'people',
      routerLink: 'associados'
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

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.data.getUser(String(id)).subscribe(user =>
      {
        this.preencher_form(user.data(), id)
      })
  }

  preencher_form(user: any, id: string)
  {
    this.id = id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.password = user.password;
    this.perfil = user.perfil;
  }

  resetForm()
  {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.password = '';
    this.perfil = '';
    this.user_name = '';
  }

  updateUser()
  {
    if(this.first_name == '' || this.last_name == '' || this.password == '' || this.perfil == '')
    {
      alert('Preencha todos os campos');
    }
    else 
    {
      this.userObj.id = this.id;
      this.userObj.first_name = this.first_name;
      this.userObj.last_name = this.last_name;
      this.userObj.password = this.password;
      this.userObj.perfil = this.perfil;
      this.userObj.user_name = `${this.first_name.toLowerCase()}.${this.last_name.toLowerCase()}`;
      this.data.updateUser(this.userObj, this.id)
      this.router.navigate(['/associados'])
      this.resetForm()
    }
  }
}