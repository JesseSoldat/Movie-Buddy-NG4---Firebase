import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-social-splash',
  templateUrl: './social-splash.component.html',
  styleUrls: ['./social-splash.component.css']
})
export class SocialSplashComponent implements OnInit {
	social: string;

  constructor(private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.social = params['social'];
  		setTimeout(() => {
  			this.router.navigate(['dashboard']);
  		}, 3000);
  	});
  
  }

  navigate() {
  	this.router.navigate(['dashboard']);
  }

}
