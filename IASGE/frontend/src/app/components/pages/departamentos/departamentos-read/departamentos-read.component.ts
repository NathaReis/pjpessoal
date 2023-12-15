import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../models/user';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/components/services/data.service';
import { HeaderService } from 'src/app/components/services/header.service';
import { DialogConfirmationComponent } from 'src/app/components/template/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-departamentos-read',
  templateUrl: './departamentos-read.component.html',
  styleUrls: ['./departamentos-read.component.css']
})
export class DepartamentosReadComponent implements AfterViewInit, OnInit{

  constructor(
    private data: DataService,
    private dialog: MatDialog,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Departamentos',
      icon: 'house',
      routerLink: 'departamentos'
    }
  }

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
        const noass = this.usersList.filter(user => user.perfil != 'associado')
        const ass = this.usersList.filter(user => user.perfil == 'associado')
        this.usersList = noass.concat(ass);//Ordernar a lista de Diretor e admin emcima para associados
        //Passa a lista para o data usado na table
        this.dataSource = new MatTableDataSource<User>(this.usersList);
      }, err => 
      {
        //Mensagem de erro
        alert(`Erro de busca: ${err}`)
      })
  }

  deleteUser(id: string, name: string = '')
  {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: `Deseja excluir ${name}?`,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result)
      {
        this.data.deleteUser(id);
      }
    });
  }
}