import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	formType: string = 'Login';
  isAuthenticated: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onUserSubmitted(event) {
  	console.log(event);
  }

}
