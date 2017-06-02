import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  isAuthenticated:boolean = true;

	id: string;
	movie;
  constructor(private movieService: MovieService,
  						private router: Router,
  						private route: ActivatedRoute) { 
  }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.id = params['id'];
  		this.movieService.getSingleMovie(this.id).subscribe((movie) => {
	  		this.movie = movie;
	  		console.log(movie);
	  	});
  	})
  }

  goBack() {
    this.router.navigate(['dashboard'])
  }

  addToFavorites(movie) {

  }



}
