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

  //Movie
  movie;
  title: string;
  homepage: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: string[];
  release_date: string;
  vote_average: number;

  constructor(private movieService: MovieService,
  						private router: Router,
  						private route: ActivatedRoute) { 
  }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.id = params['id'];
  		this.movieService.getSingleMovie(this.id).subscribe((movie) => {
	  		this.movie = movie;
        this.title = movie.title;
        this.homepage = movie.homepage;
        this.original_title = movie.original_title;
        this.overview = movie.overview;
        this.poster_path = movie.poster_path;
        this.production_companies = movie.production_companies;
        this.release_date = movie.release_date;
        this.vote_average = movie.vote_average; 
        if(this.production_companies.length >= 1) {
          let stringContainer = [];
          this.production_companies.forEach((obj) => {
           stringContainer.push(obj['name']);
          });
          this.production_companies = stringContainer;
        }
      
	  	});
  	})
  }

  goBack() {
    this.router.navigate(['dashboard'])
  }

  addToFavorites() {
    console.dir(this.movie);
    this.movieService.addToFavorites(this.movie);
  }



}
