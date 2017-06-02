import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
	@Input() movie;
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  detailsPage(movie) {
  	this.router.navigate(['movie-details', {id: movie.id}]);
  }

  addToFavorites(movie) {

  }

}
