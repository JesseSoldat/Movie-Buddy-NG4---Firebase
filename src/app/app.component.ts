import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { MovieService } from './services/movie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	user: Observable<firebase.User>;
  uid: string;


	constructor(private router: Router,
							public afAuth: AngularFireAuth,
              public movieService: MovieService) {
	   this.onAuthStateChanged(); 
	}

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  onAuthStateChanged() {
  	firebase.auth().onAuthStateChanged(user => {
      if(user) {
        localStorage.setItem('user', JSON.stringify({ uid: user.uid, name: user.displayName }));
        // console.log('app');
        // console.log(user);

        this.uid = JSON.parse(localStorage.getItem('user')).uid; 
        // console.log(this.uid);

        if(user.displayName === null) {
          let name   = user.email.substring(0, user.email.lastIndexOf("@"));
          user.updateProfile({
            displayName: name
          }).then(() => {
            this.movieService.addName(user.displayName, this.uid);
            localStorage.setItem('user', JSON.stringify({ uid: user.uid, name: user.displayName }));
          });
        }

        let provider = user.providerData[0].providerId;
        if(provider === 'facebook.com') {
          // console.log('facebook');
          this.movieService.addName(user.displayName, this.uid);

          this.router.navigate(['social-splash', {social: 'facebook'}]);

        } 
        if(provider === 'google.com') {
          this.movieService.addName(user.displayName, this.uid);
          // console.log('google');
          this.router.navigate(['social-splash', {social: 'google'}]);
        }
        if(provider === 'password'){
          // console.log(provider);
          this.router.navigate(['movie-favorites']);
        }

      } else {
        localStorage.setItem('user', JSON.stringify({ uid: '', name: '' }));
        localStorage.setItem('currentSearch', JSON.stringify({ searchResult: [] }));
  			this.router.navigate(['login']);
      	}     
    }); 
 
  }
}
