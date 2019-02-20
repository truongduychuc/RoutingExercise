import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'abcd';
  password = '1234';
  constructor(private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin() {
    this.api.login(this.username, this.password).subscribe(r => {
      if (r.token) {
        this.auth.setToken(r.token);
        this.router.navigate(['home']);
      }},
      r => {
        alert(r.error.error);
    });

  }

}
