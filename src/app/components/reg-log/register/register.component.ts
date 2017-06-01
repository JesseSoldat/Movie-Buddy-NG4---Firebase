import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	formType: string = 'Register';
  isAuthenticated: boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onUserSubmitted(user) {
    this.authService.emailSignup(user.email, user.password);
  }

  onSocialSignup(type) {
    if(type === 'facebook') {
    }

    if(type === 'google') {
    this.authService.googleSignup();
    }

    if(type === 'twitter') {     
    }
    
    if(type === 'github') {     
    }
  }

}
