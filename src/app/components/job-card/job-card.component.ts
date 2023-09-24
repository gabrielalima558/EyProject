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
    title: "Analista",
    description: "blá blá blá blá blá",
    minorityGroups: ["Indigena"]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
