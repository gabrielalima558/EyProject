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

@NgModule({
  declarations: [
    AppComponent,
    EyHeaderComponent,
    PersonalInformationComponent,
    LoginComponent,
    AdminBuscaComponent,
    HomeAdminComponent,
    CadastroVagaComponent,
    VagasCadastradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
