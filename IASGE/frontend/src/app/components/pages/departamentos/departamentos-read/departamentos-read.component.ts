import { User } from '../../../models/user';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-departamentos-read',
  templateUrl: './departamentos-read.component.html',
  styleUrls: ['./departamentos-read.component.css']
})
export class DepartamentosReadComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'first_name', 'actions'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: User[] = [
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
  {id: "1", first_name: 'Comunicação', last_name: 'Central', password: '123', perfil: 'admin'},
];