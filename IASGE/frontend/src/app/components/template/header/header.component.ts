import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    private headerService: HeaderService,
    private data: DataService) {}

  get title(): string
  {
    return this.headerService.headerData.title;
  }
  get icon(): string
  {
    return this.headerService.headerData.icon;
  }
  get routerLink(): string
  {
    return this.headerService.headerData.routerLink;
  }

  //Perfis
  eventos = false;
  associados = false;
  departamentos = false;

  ngOnInit(): void {
    this.data.getAllPerfis().subscribe(res =>
      {
        //Mapeia o resultado
        const perfis = res.map((e: any) =>
          {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          })
        const perfil = perfis.filter(perfil => localStorage.getItem('logado') == perfil.type)
        this.pages_perfil(perfil[0])
      }, err => 
      {
        //Mensagem de erro
        alert(`Erro de busca: ${err}`)
      })
  }

  pages_perfil(perfil: any)
  {
    this.eventos = perfil.eventos;
    this.associados = perfil.associados;
    this.departamentos = perfil.departamentos
  }
}
