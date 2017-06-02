import {Injectable} from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable() 
export class MovieService {
	apiKey: string; // themoviedb API

	constructor(private jsonp: Jsonp) {
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
	addToFavorites(m) {
		 const movie = new Movie(m.title, m.poster_path, m.homepage, m.id,
		 	m.original_title, m.overview, m.production_companies, 
		 	m.release_date, m.vote_average );

		 console.log(movie);

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


