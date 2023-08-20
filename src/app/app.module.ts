import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyHeaderComponent } from './components/ey-header/ey-header.component';
import { PersonalInformationComponent } from './components/registration/personal-information/personal-information.component';
import { LoginComponent } from './components/login/login.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { SocialVulnerabilityInformationComponent } from './components/registration/social-vulnerability-information/social-vulnerability-information.component';
import { SubmitJobPositionComponent } from './components/registration/submit-job-position/submit-job-position.component';
import { SubmitJobPositionChallengeComponent } from './components/registration/submit-job-position-challenge/submit-job-position-challenge.component';
import { SubmitJobPositionSuccessComponent } from './components/registration/submit-job-position-success/submit-job-position-success.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EyHeaderComponent,
    PersonalInformationComponent,
    LoginComponent,
    JobBoardComponent,
    SocialVulnerabilityInformationComponent,
    SubmitJobPositionComponent,
    SubmitJobPositionChallengeComponent,
    SubmitJobPositionSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
