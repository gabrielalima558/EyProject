import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextStep() {
    this.router.navigate(['/secondPersonalInformation'])
  }
}
