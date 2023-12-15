import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit{

  constructor(
    private auth : AuthService,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Config',
        icon: 'settings',
        routerLink: 'config'
      }
    }

  ngOnInit(): void {
    this.auth.auth_guard();
  }

  logout()
  {
    this.auth.logout();
  }

}
