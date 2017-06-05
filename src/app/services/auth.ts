import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

	constructor(private router: Router,
						public afAuth: AngularFireAuth) {
	}

	emailSignup(email: string, password: string) {
		this.afAuth.auth.createUserWithEmailAndPassword(email, password);
	}

	emailSignin(email: string, password: string) {
		this.afAuth.auth.signInWithEmailAndPassword(email, password);
	}

	googleSignup() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	facebookSignup() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result) {		
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  let token = result.credential.accessToken;
		  // The signed-in user info.
		  let user = result.user;
		}).catch(function(err) {
		});
	}

	logOut() {
		this.afAuth.auth.signOut()
			.then(() => {
				localStorage.setItem('user', JSON.stringify({ uid: '', name: '' }));
				localStorage.setItem('currentSearch', JSON.stringify({ searchResult: [] }));
			

			})
			.catch((err) => {
			});
	}

	
}