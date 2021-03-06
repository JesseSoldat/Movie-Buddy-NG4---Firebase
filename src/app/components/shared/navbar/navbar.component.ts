import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Login and Reg
  @Input() formType: string;
  //Entire app
	@Input() isAuthenticated:boolean;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  
  }

  //Login and Reg
  toggleLogin(type: string) {
    if(type === 'Register') {
      this.router.navigate(['register']);
    }
    if(type === 'Login') {
      this.router.navigate(['login']);    
    }
  }
  //Entire App
  onLogout() {
    this.authService.logOut();
  }

}
