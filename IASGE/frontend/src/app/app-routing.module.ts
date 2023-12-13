import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalasComponent } from './views/escalas/escalas.component';
import { HomeComponent } from './views/home/home.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ConfigComponent } from './views/config/config.component';
import { DepartamentosComponent } from './views/departamentos/departamentos.component';
import { DepartamentosCreateComponent } from './components/pages/departamentos/departamentos-create/departamentos-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'escalas', component: EscalasComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'departamentos/create', component: DepartamentosCreateComponent}
  /*
  {path: 'associados', component: AssociadosComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
