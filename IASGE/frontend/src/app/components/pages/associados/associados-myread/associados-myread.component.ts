import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
    let master_id = localStorage.getItem('user_id');
    let newList: User[] = [];
    let isAssociaction = 0;
    users.forEach(user =>
      {
        user.departamentos?.forEach(dep =>
          {
            if(dep.id == master_id)
            {
              isAssociaction++;
            }
          })
        isAssociaction != 0 ? newList.push(user) : null;
        isAssociaction = 0;
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

  posOfDepartamento(user: User): number
  {
    let master_id = String(localStorage.getItem('user_id'));
    let master_name = String(localStorage.getItem('user_name'));
    let master_obj = {id: master_id, name: master_name};

    for (let key in user.departamentos) {

      let obj = {
          key: key,
          value: user.departamentos[+key]
      };

      console.log(`Obj: ${obj.value}\nMaster: ${master_obj}`)
      if(obj.value == master_obj)
      {
        console.log(key)
        return +key
      }
    }
    return -1;
  }

  removeOfDepartamento(user: User, pos: number)
  {
    const newDepartamentosList = user.departamentos?.slice(pos,1);
    console.log(`Pos: ${pos}\nLista: ${newDepartamentosList}`)
  }

  removerAssociadoEquipe(user: User)
  {
    const pos = +this.posOfDepartamento(user);
    //this.removeOfDepartamento(user, pos)
    const departamentos = user.departamentos;
    let userObj = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      password: user.password,
      perfil: user.perfil,
      user_name: user.user_name,
      departamentos: departamentos
    }

    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: `Deseja adicionar ${user.user_name} a equipe?`,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result)
      {
        console.log(userObj);
        //this.data.updateUser(user, String(user.id));
      }
    });
  }
}
