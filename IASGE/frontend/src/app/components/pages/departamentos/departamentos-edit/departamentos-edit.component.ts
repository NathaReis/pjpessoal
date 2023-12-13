import { Component } from '@angular/core';
import { User } from 'src/app/components/models/user';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-departamentos-edit',
  templateUrl: './departamentos-edit.component.html',
  styleUrls: ['./departamentos-edit.component.css']
})
export class DepartamentosEditComponent {
  
  constructor(private data : DataService) {}

  updateUser(user: User)
  {
    this.data.updateUser(user);
  }
}
