import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
}) 
export class LoginFormComponent implements OnInit {
	@Input() formType: string;
  @Output() userSubmitted = new EventEmitter<User>();

  constructor(private router: Router,
              private route: ActivatedRoute) {  
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    const user = new User(form.value.email, form.value.password);
    this.userSubmitted.emit(user);
  }
}

class User {
 constructor(public email: string, public password: string) {}
}
