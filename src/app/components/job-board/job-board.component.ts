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

  selectedItemDropdown: string = '';

  constructor(private service: JobsService) { }

  ngOnInit(): void {

    this.service.listar().subscribe((listJobs) => {
      this.listJobs = listJobs
    })
  }

  onSelectDropdownItem(item: string) {
    this.selectedItemDropdown = item;
  }



}
