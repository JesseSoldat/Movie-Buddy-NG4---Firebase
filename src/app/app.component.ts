import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	user: Observable<firebase.User>;

	constructor(private router: Router,
							public afAuth: AngularFireAuth) {
	   this.onAuthStateChanged(); 
	}

  onAuthStateChanged() {
  	this.user = this.afAuth.authState;

  	firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log(user);
  			this.router.navigate(['dashboard']);
      } else {
  			this.router.navigate(['login']);
      	}     
    }); 
  	// if(this.user) {
  	// 	console.log(this.user);
  	// 	// this.router.navigate(['dashboard']);
  	// }
  	// if(!this.user) {
  	// 	this.router.navigate(['login']);
  	// }
    

  }
}
