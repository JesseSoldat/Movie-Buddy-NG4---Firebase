import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie';
import * as _ from 'lodash';


@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.component.html',
  styleUrls: ['./movie-favorites.component.css']
})
export class MovieFavoritesComponent implements OnInit {
	uid: string;
	isAuthenticated: boolean = true;
	isFavorite;
  heart: boolean = true;
  //Pipes
	filterTextLength: number = 25;
  filterListBy: string; //ngModel on text input
  matchingUsers = [];

  constructor(private movieService: MovieService) { 
  	this.uid = JSON.parse(localStorage.getItem('user')).uid;
  }

  ngOnInit() {
  	this.movieService.getFavorites(this.uid).subscribe((fav) => {
  		this.isFavorite = fav;
  	  // console.log(this.isFavorite);
  	});
  }

  onFilterText(event) {
    this.filterListBy = event;
  }

  searchOtherList() {
    this.movieService.getOtherLists().subscribe((users) => {
      
     let array;
      users.forEach((user) => {
        if(this.uid !== user.$key) {
          // console.log(user.movies);
          let a = [];
          for(let key in user.movies) {
            
            if (user.movies.hasOwnProperty(key)) { 
                var value = user.movies[key];
                // console.log(value.id);
                a.push(value.id);
              }
          } //for
        this.matchingUsers.push(a);       
        }

      }); //forEach
      console.log(this.matchingUsers);
    });
  }

}
