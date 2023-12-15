import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Home',
        icon: 'home',
        routerLink: 'home'
      }
    }

  ngOnInit(): void {
    this.auth.auth_guard();
  }
}

