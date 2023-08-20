import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  user: User = {
    name: "",
    lastName: "",
    cpf: "",
    email: "",
    phone: "",
    password: "",
    ethnicity: "",
    nativePeople: "",
    lgbtqia: "",
    pcd: "",
    familyIncome: ""
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPerson() {

    this.router.navigate(['register/2', this.user.name, this.user.lastName, this.user.cpf, this.user.email, this.user.phone, this.user.password]);
  }

}
