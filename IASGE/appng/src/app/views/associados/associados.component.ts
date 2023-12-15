import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-associados',
  templateUrl: './associados.component.html',
  styleUrls: ['./associados.component.css']
})
export class AssociadosComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Associados',
        icon: 'people',
        routerLink: 'associados'
      }
    }

  ngOnInit(): void {
    this.auth.auth_guard();
  }
}
