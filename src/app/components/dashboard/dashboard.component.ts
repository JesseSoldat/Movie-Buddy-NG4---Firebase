import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uid: string;
	//Navbar
	isAuthenticated:boolean = true;
	searchStr: string; //string types in the search bar
	searchRes; //current result from either searching or loading last result from local storage
  favorites; //user's favorite movies stored in firebase
	
  constructor(private movieService: MovieService) {
    this.searchRes = JSON.parse(localStorage.getItem('currentSearch')).searchRes; 
    this.uid = JSON.parse(localStorage.getItem('user')).uid; 

    this.movieService.getMovies(this.uid).subscribe((movies) => {
      this.favorites = movies;
      let isFavorite =  _.intersectionBy(this.favorites, this.searchRes, 'id');
      let notFavorite = _.differenceBy( this.searchRes, this.favorites, 'id');
      isFavorite.forEach((fav) => {
        fav['heart'] = true;
      });
      let updateRes = _.concat(isFavorite, notFavorite);
      this.searchRes = updateRes;
    
      console.log(isFavorite);
      console.log(notFavorite);

    });
  }

  ngOnInit() {
  }

  searchMovies() {
  	this.movieService.searchMovies(this.searchStr).subscribe((movies) => {
  		this.searchRes = movies.results;
      localStorage.setItem('currentSearch', JSON.stringify({ searchRes: this.searchRes }));
  
  	});
  }

  updateSearch(event) {
    // console.log(event);
    // this.searchRes = event;
  }

}
