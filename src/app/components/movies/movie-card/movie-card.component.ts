import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
	@Input() movie;
  constructor(private router: Router,
              private movieService: MovieService) { 
  }

  ngOnInit() {
  }

  detailsPage(movie) {
  	this.router.navigate(['movie-details', {id: movie.id}]);
  }

  addToFavorites(movie) {
    console.log(movie.id);
    this.movieService.getSingleMovie(movie.id).subscribe((movie) => {
      this.movieService.addToFavorites(movie);
      });
  }

}
