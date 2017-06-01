import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	formType: string = 'Register';
  isAuthenticated: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onUserSubmitted(event) {
  	console.log(event);
  }

}
