import { BehaviorSubject } from 'rxjs';
import { HeaderTitleData } from './../models/header-title';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  _headerData = new BehaviorSubject<HeaderTitleData>({
    title: '',
    icon: '',
    routerLink: ''
  });

  constructor() { }

  // métodos

  get headerData(): HeaderTitleData {
    return this._headerData.value;
  }//Busca

  set headerData(headerData: HeaderTitleData)
  {
    this._headerData.next(headerData)
  }//Edita
}
