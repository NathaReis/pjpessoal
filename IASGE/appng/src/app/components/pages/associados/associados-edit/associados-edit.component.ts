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
  
  hide = true;

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
    departamentos: '',
  }
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  editor: string = '';
  departamentos: string = '';
  perfil: string = '';
  password: string = '';

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
    this.departamentos = user.departamentos;
    this.perfil = user.perfil;
    this.password = user.password;

    if(user.departamentos)
    {
      let isUltimo = user.departamentos.replace(`${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},`,'').length <= 5 ? true : false;
      if(isUltimo)
      {
        let perfil = user.departamentos.replace(`${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},`,'')
        this.editor = perfil;
      }
      else 
      {
        let deps = user.departamentos.split('/')
        deps.forEach((dep: string) =>
          {
            let id = dep.split(',')[0];
            if(id == localStorage.getItem('user_id'))
            {
              let perfil = user.departamentos.replace(`${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},`,'')
              this.editor = perfil;
            }
          })
      }
    }
  }

  resetForm()
  {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
  }

  updateUser()
  {
    if(this.departamentos)
    {
      let isUltimo = this.departamentos.replace(`${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},`,'').length <= 5 ? true : false;
      if(isUltimo)
      {
        let perfil = `${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},${this.editor}`;
        this.departamentos = perfil;
      }
      else 
      {
        let newList = '';
        let deps = this.departamentos.split('/')
        deps.forEach((dep: string) =>
          {
            let id = dep.split(',')[0];
            if(id == localStorage.getItem('user_id'))
            {
              let newDep = `${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},${this.editor}`;
              newList.length <= 0 ? newList += newDep : `/${newDep}`;
            }
            else 
            {
              newList.length <= 0 ? newList += dep : `/${dep}`;
            }
          })

          this.departamentos = newList;
      }
    }
    if(this.first_name == '' || this.last_name == '')
    {
      alert('Preencha todos os campos');
    }
    else 
    {
      this.userObj.id = this.id;
      this.userObj.first_name = this.first_name;
      this.userObj.last_name = this.last_name;
      this.userObj.user_name = `${this.first_name.toLowerCase()}.${this.last_name.toLowerCase()}`;
      this.userObj.departamentos = this.departamentos;
      this.userObj.perfil = this.perfil;
      this.userObj.password = this.password;
      console.log(this.userObj)
      this.data.updateUser(this.userObj, this.id)
      this.router.navigate(['/associados'])
    }
  }
}