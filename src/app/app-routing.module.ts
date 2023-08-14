import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './components/registration/personal-information/personal-information.component';
import { LoginComponent } from './components/login/login.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { SocialVulnerabilityInformationComponent } from './components/registration/social-vulnerability-information/social-vulnerability-information.component';
import { SubmitJobPositionComponent } from './components/registration/submit-job-position/submit-job-position.component';

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
    path: 'register/1',
    component: PersonalInformationComponent
  },
  {
    path: 'job-board',
    component: JobBoardComponent
  },
  {
    path: 'register/2',
    component: SocialVulnerabilityInformationComponent
  },
  {
    path: 'submit/1',
    component: SubmitJobPositionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
