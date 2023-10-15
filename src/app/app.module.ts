import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyHeaderComponent } from './components/ey-header/ey-header.component';
import { PersonalInformationComponent } from './components/registration/personal-information/personal-information.component';
import { LoginComponent } from './components/login/login.component';
import { AdminBuscaComponent } from './components/busca/admin-busca/admin-busca.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { CadastroVagaComponent } from './components/admin/cadastro-vaga/cadastro-vaga.component';
import { VagasCadastradasComponent } from './components/admin/vagas-cadastradas/vagas-cadastradas.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { SocialVulnerabilityInformationComponent } from './components/registration/social-vulnerability-information/social-vulnerability-information.component';
import { SubmitJobPositionComponent } from './components/registration/submit-job-position/submit-job-position.component';
import { SubmitJobPositionChallengeComponent } from './components/registration/submit-job-position-challenge/submit-job-position-challenge.component';
import { SubmitJobPositionSuccessComponent } from './components/registration/submit-job-position-success/submit-job-position-success.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobCardComponent } from './components/job-card/job-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProcessoSeletivoComponent } from './components/admin/processo-seletivo/processo-seletivo.component';

@NgModule({
  declarations: [
    AppComponent,
    EyHeaderComponent,
    PersonalInformationComponent,
    LoginComponent,
    AdminBuscaComponent,
    HomeAdminComponent,
    CadastroVagaComponent,
    VagasCadastradasComponent,
    JobBoardComponent,
    SocialVulnerabilityInformationComponent,
    SubmitJobPositionComponent,
    SubmitJobPositionChallengeComponent,
    SubmitJobPositionSuccessComponent,
    JobCardComponent,
    ProcessoSeletivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
