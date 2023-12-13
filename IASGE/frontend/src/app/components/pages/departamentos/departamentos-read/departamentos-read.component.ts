import { User } from '../../../models/user';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-departamentos-read',
  templateUrl: './departamentos-read.component.html',
  styleUrls: ['./departamentos-read.component.css']
})
export class DepartamentosReadComponent implements AfterViewInit, OnInit{

  constructor(private data : DataService) {}
  
  //TABLE CONFIG
  displayedColumns: string[] = ['id', 'first_name', 'actions'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  dataSource = new MatTableDataSource<User>();

  //USER LIST
  usersList: User[] = [];
  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers()
  {
    //Consulta o serviço correspondente
    this.data.getAllUsers().subscribe(res =>
      {
        //Mapeia o resultado
        this.usersList = res.map((e: any) =>
          {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          })
          //Passa a lista para o data usado na table
          this.dataSource = new MatTableDataSource<User>(this.usersList);
      }, err => 
      {
        //Mensagem de erro
        alert(`Erro de busca: ${err}`)
      })
  }
  
  deleteUser(user: User)
  {
    if(window.confirm(`Deseja excluir ${user.first_name}.${user.last_name}@iasge.com?`))
    {
      this.data.deleteUser(user);
    }
  }
}