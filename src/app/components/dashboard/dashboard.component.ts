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
  //---------------
  heart: boolean = true;

  isFavorite;
  notFavorite;
	
  constructor(private movieService: MovieService) {
    this.searchRes = JSON.parse(localStorage.getItem('currentSearch')).searchRes; 
    this.uid = JSON.parse(localStorage.getItem('user')).uid; 
    this.compareSearchAndMyList();

    
  }

  ngOnInit() {
  }

  searchMovies() {
  	this.movieService.searchMovies(this.searchStr).subscribe((movies) => {
  		this.searchRes = movies.results;
      this.compareSearchAndMyList();

      localStorage.setItem('currentSearch', JSON.stringify({ searchRes: this.searchRes }));
  
  	});
  }

  compareSearchAndMyList() {
    this.movieService.getMovies(this.uid).subscribe((movies) => {
      this.favorites = movies;
      this.isFavorite =  _.intersectionBy(this.favorites, this.searchRes, 'id');
      this.notFavorite = _.differenceBy( this.searchRes, this.favorites, 'id');
     
      let updateRes = _.concat(this.isFavorite, this.notFavorite);
      this.searchRes = updateRes;
    
      // console.log(this.isFavorite);
      // console.log(this.notFavorite);
    });
  }

  updateSearch(event) {
    // console.log(event);
    // this.searchRes = event;
  }

}
