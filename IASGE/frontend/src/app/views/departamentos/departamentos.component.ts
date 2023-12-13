import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Departamentos',
      icon: 'house',
      routerLink: 'departamentos'
    }
  }
  visibility = true;
}
