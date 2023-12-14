import { Component } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent {

  constructor(
    private auth: AuthService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Departamentos',
      icon: 'house',
      routerLink: 'departamentos'
    }
  }
  visibility = true;

  ngOnInit(): void {
    this.auth.auth_guard();
  }
}
