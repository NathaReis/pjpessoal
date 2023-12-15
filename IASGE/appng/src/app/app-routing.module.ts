import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalasComponent } from './views/escalas/escalas.component';
import { HomeComponent } from './views/home/home.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ConfigComponent } from './views/config/config.component';
import { DepartamentosComponent } from './views/departamentos/departamentos.component';
import { DepartamentosCreateComponent } from './components/pages/departamentos/departamentos-create/departamentos-create.component';
import { DepartamentosEditComponent } from './components/pages/departamentos/departamentos-edit/departamentos-edit.component';
import { AssociadosComponent } from './views/associados/associados.component';
import { AssociadosCreateComponent } from './components/pages/associados/associados-create/associados-create.component';
import { AssociadosEditComponent } from './components/pages/associados/associados-edit/associados-edit.component';
import { EventosCreateComponent } from './components/pages/eventos/eventos-create/eventos-create.component';
import { EventosEditComponent } from './components/pages/eventos/eventos-edit/eventos-edit.component';
import { EscalasCreateComponent } from './components/pages/escalas/escalas-create/escalas-create.component';
import { EscalasEditComponent } from './components/pages/escalas/escalas-edit/escalas-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'home', component: HomeComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'departamentos/create', component: DepartamentosCreateComponent},
  {path: 'departamentos/edit/:id', component: DepartamentosEditComponent},
  {path: 'associados', component: AssociadosComponent},
  {path: 'associados/create', component: AssociadosCreateComponent},
  {path: 'associados/edit/:id', component: AssociadosEditComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'eventos/create', component: EventosCreateComponent},
  {path: 'eventos/edit/:id', component: EventosEditComponent},
  {path: 'escalas', component: EscalasComponent},
  {path: 'escalas/create', component: EscalasCreateComponent},
  {path: 'escalas/edit/:id', component: EscalasEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
