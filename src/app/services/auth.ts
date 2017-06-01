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

	logOut() {
		this.afAuth.auth.signOut()
			.then(() => {
				// this.router.navigate(['login']);
			})
			.catch((err) => {
			});
	}

	
}