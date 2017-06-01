import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	formType: string = 'Login';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onUserSubmitted(user) {
    this.authService.emailSignin(user.email, user.password);
  }

  onSocialSignup(type) {
    if(type === 'facebook') {
      this.authService.facebookSignup();
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
