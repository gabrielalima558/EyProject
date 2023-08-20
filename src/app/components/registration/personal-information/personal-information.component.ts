import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {


    name: string = ""
    lastName: string = ""
    cpf: string = ""
    email: string = ""
    phone: string = ""
    password: string = ""

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPerson() {

    this.router.navigate(['register/2', this.name, this.lastName, this.cpf, this.email, this.phone, this.password]);
  }

}
