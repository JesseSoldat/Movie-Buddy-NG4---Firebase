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
  

  	firebase.auth().onAuthStateChanged(user => {

      if(user) {
        localStorage.setItem('user', JSON.stringify({ uid: user.uid, name: user.displayName }));
        // console.log(user);
        if(user.displayName === null) {
          let name   = user.email.substring(0, user.email.lastIndexOf("@"));
          user.updateProfile({
            displayName: name
          }).then(() => {
            localStorage.setItem('user', JSON.stringify({ uid: user.uid, name: user.displayName }));
          });
        }

  			this.router.navigate(['dashboard']);
      } else {
  			this.router.navigate(['login']);
      	}     
    }); 
 
  }
}
