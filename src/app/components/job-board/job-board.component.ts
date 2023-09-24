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
  filteredJobs: Job[] = [];
  selectedItemDropdown: string = '';
  selectedMinorityGroup: string[] = [];

  constructor(private service: JobsService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listJobs) => {
      this.listJobs = listJobs;
      this.filteredJobs = [...listJobs];
    });
  }

  onSelectDropdownItem(item: string) {
    this.selectedItemDropdown = item;

    if (item === 'Todas') {
      this.filteredJobs = [...this.listJobs];
    } else {
      this.filteredJobs = this.listJobs.filter((job) => job.name_position === item);
    }
  }

  // ...

// Esta função verifica se pelo menos um grupo minoritário selecionado está presente na lista de grupos da vaga
isSelectedGroupInJob(selectedGroups: string[], job: Job): boolean {
  return selectedGroups.some((group) => job.minority_group_type.includes(group));
}

onSelectMinorityGroup(group: string) {
  // Atualize a lista de grupos selecionados
  if (group === 'Todas') {
    this.selectedMinorityGroup = [];
  } else if (this.selectedMinorityGroup.includes(group)) {
    // Se o grupo já estiver selecionado, remova-o
    this.selectedMinorityGroup = [];
    this.selectedMinorityGroup = this.selectedMinorityGroup.filter((g) => g !== group);
  } else {
    // Caso contrário, adicione-o à lista de grupos selecionados
    this.selectedMinorityGroup.push(group);
  }

  // Filtrar a lista de vagas com base nos grupos selecionados
  if (this.selectedMinorityGroup.length === 0) {
    // Se nenhum grupo estiver selecionado, mostre todas as vagas
    this.filteredJobs = [...this.listJobs];
  } else {
    this.filteredJobs = this.listJobs.filter((job) =>
      this.isSelectedGroupInJob(this.selectedMinorityGroup, job)
    );
  }
}

}
