import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() nav: string;
  isAuthenticated:boolean = true;
  id: string; //id of the movie on the movie database
  key: string; //key to where we store
  heart: boolean; 
  uid: string;

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
    this.uid = JSON.parse(localStorage.getItem('user')).uid; 
    // console.log('Movie Details');
    // console.log(this.uid); 
  }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.id = params['id'];
      this.key = params['key'];
      this.nav = params['nav'];

      if(this.key === undefined) {
        this.heart = false;
      }
      if(this.key !== undefined) {
        this.heart = true;
      }
   
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
    if(this.nav === 'dashboard') {
      this.router.navigate(['dashboard']);
    }
    if(this.nav === 'favorites') {
      this.router.navigate(['movie-favorites']);
    } 
    if(this.nav === 'matches') {
      let name = JSON.parse(localStorage.getItem('matchUser')).name;
      let uid = JSON.parse(localStorage.getItem('matchUser')).uid;
      this.router.navigate(['movie-matches', {name: name, uid: uid}]);
    } 
  }

  addToFavorites() {
    this.heart = true;
    this.movieService.addToFavorites(this.movie, this.uid).then((key) => {
      this.key = key;
    })
  }

  removeFromFavorites() {
    this.heart = false;
    this.movieService.removeFromFavorites(this.key, this.uid);
  }



}
