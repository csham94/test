import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public token: TokenService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.token.auth = false;
    this.token.token = '';
    this.token.id = 0;
  }

}
