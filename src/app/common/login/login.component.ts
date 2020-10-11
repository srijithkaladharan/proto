import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../utils/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(formValue: any) {
    this.auth.login('srijith@example.com', 'asdf@123');
  }

}
