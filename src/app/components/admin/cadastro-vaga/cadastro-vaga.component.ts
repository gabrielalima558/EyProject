import { Job } from './../../service/job';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.css']
})
export class CadastroVagaComponent implements OnInit {

  titulo: string = "";
  descricaoVaga: string = ""
  publicoAlvo = {
    etnicoRacial: false,
    povosOriginarios: false,
    lgbtqia: false,
    pessoasComDeficiencia: false,
    faixaEtaria: false,
    rendaFamiliar: false
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToProcessoSeletivo() {
    this.router.navigate(['/processoSeletivo', this.titulo, this.descricaoVaga, this.publicoAlvo]);
  }



}
