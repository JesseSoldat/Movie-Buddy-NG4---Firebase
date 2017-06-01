import {Injectable} from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable() 
export class MovieService {
	apiKey: string;

	constructor(private jsonp: Jsonp) {
		this.apiKey = 'c79f0a4b4f8b9c843e385c5cdb521ae1';

	}
	
	searchMovies (searchStr: string){
		return this.jsonp.get(`https://api.themoviedb.org/3/search/movie?&query=${searchStr}&sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`)
		.map(result => result.json())
	}
}