import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { user } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { count } from 'firebase/firestore';
import { User } from 'src/app/components/models/user';
import { DataService } from 'src/app/components/services/data.service';
import { HeaderService } from 'src/app/components/services/header.service';
import { DialogConfirmationComponent } from 'src/app/components/template/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-associados-myread',
  templateUrl: './associados-myread.component.html',
  styleUrls: ['./associados-myread.component.css']
})
export class AssociadosMyreadComponent implements AfterViewInit, OnInit{

  constructor(
    private data: DataService,
    private dialog: MatDialog,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Associados',
      icon: 'people',
      routerLink: 'associados'
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
          this.usersList = this.usersList.filter(this.isPerfilAssociado)
          this.usersList = this.isMyAssociado(this.usersList)
          //Passa a lista para o data usado na table
        this.dataSource = new MatTableDataSource<User>(this.usersList);
      }, err => 
      {
        //Mensagem de erro
        alert(`Erro de busca: ${err}`)
      })
  }

  isPerfilAssociado(user: any)
  {
    return user.perfil == 'associado'
  }

  isMyAssociado(users: User[])
  {
    let newList: User[] = [];
    users.forEach(user =>
      {
        if(user.departamentos)
        {
          let notMyDepartamento = user.departamentos.replace(`${localStorage.getItem('user_id')}`,'');
          if(user.departamentos != notMyDepartamento)
          {
            newList.push(user)
          }
        }
      })
    return newList;
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

  removerAssociadoEquipe(user: User)
  {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: `Deseja remover ${user.user_name} da equipe?`,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result)
      {
        if(user.departamentos)
        {
          let isUltimo = user.departamentos.replace(`${localStorage.getItem('user_id')},${localStorage.getItem('user_name')},`,'').length <= 5 ? true : false;
          if(isUltimo)
          {
            this.data.deleteUser(String(user.id))//Deleta associado se ele n tiver departamento
          }
          else //Exclui do meu departamento
          {
            let newList = '';
            let deps = user.departamentos.split('/')
            deps.forEach(dep =>
              {
                let id = dep.split(',')[0];
                if(id != localStorage.getItem('user_id'))
                {
                  newList.length <= 0 ? newList = `${dep}` : newList += `/${dep}`;
                }
              })
            user.departamentos = newList;
          }
        }

        this.data.updateUser(user, String(user.id));
      }
    });
  }
}
