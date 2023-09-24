import { SubmitJobPositionSuccessComponent } from './components/registration/submit-job-position-success/submit-job-position-success.component';
import { SubmitJobPositionChallengeComponent } from './components/registration/submit-job-position-challenge/submit-job-position-challenge.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './components/registration/personal-information/personal-information.component';
import { LoginComponent } from './components/login/login.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { SocialVulnerabilityInformationComponent } from './components/registration/social-vulnerability-information/social-vulnerability-information.component';
import { SubmitJobPositionComponent } from './components/registration/submit-job-position/submit-job-position.component';
import { JobCardComponent } from './components/job-card/job-card.component';

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
    path: 'register/2',
    component: SocialVulnerabilityInformationComponent
  },
  {
    path: 'job-board',
    component: JobBoardComponent
  },
  {
    path: 'register/2/:name/:cpf/:email/:mobileNumber/:password',
    component: SocialVulnerabilityInformationComponent
  },
  {
    path: 'job-card',
    component: JobCardComponent
  },
  {
    path: 'submit/1',
    component: SubmitJobPositionComponent
  },
  {
    path: 'submit/2',
    component: SubmitJobPositionChallengeComponent
  },
  {
    path: 'submit/3',
    component: SubmitJobPositionSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
