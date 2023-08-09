import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './components/registration/personal-information/personal-information.component';
import { LoginComponent } from './components/login/login.component';
import { SecondPersonalInformationComponent } from './components/registration/second-personal-information/second-personal-information.component';

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
    path: 'secondPersonalInformation',
    component: SecondPersonalInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
