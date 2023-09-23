import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../service/job';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobBoardComponent implements OnInit {

  listJobs: Job[] = [];
  filteredJobs: Job[] = []; // Lista de vagas filtradas
  selectedItemDropdown: string = '';

  constructor(private service: JobsService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listJobs) => {
      this.listJobs = listJobs;
      // Inicialmente, você pode mostrar todas as vagas
      this.filteredJobs = [...listJobs];
    });
  }

  onSelectDropdownItem(item: string) {
    this.selectedItemDropdown = item;

    // Aqui você filtra a lista de vagas com base na opção selecionada
    if (item === 'Todas') {
      // Se 'Todas' for selecionada, mostre todas as vagas
      this.filteredJobs = [...this.listJobs];
    } else {
      // Caso contrário, filtre as vagas com base na opção selecionada
      this.filteredJobs = this.listJobs.filter((job) => job.name_position === item);
    }
  }
}
