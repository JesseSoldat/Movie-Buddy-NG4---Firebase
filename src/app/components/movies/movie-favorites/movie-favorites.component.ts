import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie';

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
	filterTextLength: number = 25;

  constructor(private movieService: MovieService) { 
  	this.uid = JSON.parse(localStorage.getItem('user')).uid;

  }

  ngOnInit() {
  	this.movieService.getFavorites(this.uid).subscribe((fav) => {
  		this.isFavorite = fav;
  	
  	});
  }

}
