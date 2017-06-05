import {Injectable} from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

//Firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable() 
export class MovieService {
	apiKey: string; // themoviedb API

	//Firebase
	name: FirebaseObjectObservable<string>;
	movies: FirebaseListObservable<Movie[]>;
	movie: FirebaseObjectObservable<Movie>;
	otherUsersList: FirebaseListObservable<any>;
	otherUserList: FirebaseListObservable<any>;

	constructor(private jsonp: Jsonp,
							private afDb: AngularFireDatabase) {

		this.apiKey = 'c79f0a4b4f8b9c843e385c5cdb521ae1'; // themoviedb API

	}
	// themoviedb API-------------------------------------------------
	getSingleMovie(id: string) {
		return this.jsonp.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&callback=JSONP_CALLBACK`)
		.map(result => result.json())
	}
	
	searchMovies(searchStr: string){
		return this.jsonp.get(`https://api.themoviedb.org/3/search/movie?&query=${searchStr}&sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`)
		.map(result => result.json())
	}

	// Firebase---------------------------------------------------------
	addName(n, uid) {
		this.name = this.afDb.object(`moviedb/users/${uid}/name`) as FirebaseObjectObservable<string>;
		this.name.set(n);
	}

	addToFavorites(m, uid) {
		 const movie = new Movie(m.title, m.poster_path, m.homepage, m.id,
		 	m.original_title, m.overview, m.production_companies, 
		 	m.release_date, m.vote_average );
		 this.movies = this.afDb.list(`moviedb/users/${uid}/movies`) as FirebaseListObservable<Movie[]>;
		 return this.movies.push(movie).then((item) => { 
      return item.key
    });		 
	}

	removeFromFavorites(key, uid) {
		// console.log(uid);
		this.movies = this.afDb.list(`moviedb/users/${uid}/movies`) as FirebaseListObservable<Movie[]>;
		this.movies.remove(key)
	}
 
	getFavorites(uid) {	
		this.movies = this.afDb.list(`moviedb/users/${uid}/movies`) as FirebaseListObservable<Movie[]>;
		return this.movies;
	}

	getUsersLists() {
		this.otherUsersList = this.afDb.list(`moviedb/users`) as FirebaseListObservable<any>;
		return this.otherUsersList;
	}
	getUserList(uid) {
		this.otherUserList = this.afDb.list(`moviedb/users/${uid}/movies`) as FirebaseListObservable<any>;
		return this.otherUserList;
	}
}

class Movie {
 constructor(public title: string, public poster_path: string,
 							public homepage: string, public id: number, 
 							public original_title: string, public overview: string,
 							public production_companies: string, public release_date: string,
 							public vote_average: number ) {
 }
}


