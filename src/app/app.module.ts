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

@NgModule({
  declarations: [
    AppComponent,
    EyHeaderComponent,
    PersonalInformationComponent,
    LoginComponent,
    JobBoardComponent,
    SocialVulnerabilityInformationComponent,
    SubmitJobPositionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
