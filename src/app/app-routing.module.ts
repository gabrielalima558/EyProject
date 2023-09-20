import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './components/registration/personal-information/personal-information.component';
import { LoginComponent } from './components/login/login.component';
import { AdminBuscaComponent } from './components/busca/admin-busca/admin-busca.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { CadastroVagaComponent } from './components/admin/cadastro-vaga/cadastro-vaga.component';
import { VagasCadastradasComponent } from './components/admin/vagas-cadastradas/vagas-cadastradas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'personalInformation',
    component: PersonalInformationComponent
  },
  {
    path:'adminBusca',
    component: AdminBuscaComponent
  },
  {
    path:'adminHome',
    component: HomeAdminComponent
  },
  {
    path:'cadastroVagas',
    component: CadastroVagaComponent
  },
  {
    path:'vagasCadastradas',
    component: VagasCadastradasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
