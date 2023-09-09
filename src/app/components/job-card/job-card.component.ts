import { Job } from './../service/job';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job = {
    id:0,
    name_position: "Analista",
    minority_group_type: ["Indigena"],
    description: "blá blá blá blá blá"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
