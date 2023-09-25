import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Login } from './service/login';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: AuthService) { }

  ngOnInit(): void {
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  doLogin() {
    this.service.login(this.login)
      .subscribe(() => {
        const tokenInfo = this.getDecodedAccessToken(localStorage.getItem('token')!);
        if(tokenInfo.role == 'ADMIN') {
          this.router.navigate(['adminHome']);
        } else {
          this.router.navigate(['job-board']);
        }
      });
  }
}


