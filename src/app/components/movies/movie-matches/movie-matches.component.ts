import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie';

@Component({
  selector: 'app-movie-matches',
  templateUrl: './movie-matches.component.html',
  styleUrls: ['./movie-matches.component.css']
})
export class MovieMatchesComponent implements OnInit {
	matchId: string;
	matchUser: string;
	myMovieIds;
	otherMovies;

	heart: boolean = false;
  filterTextLength: number = 25;

  constructor(private router: Router,
  						private route: ActivatedRoute,
  						private movieService: MovieService) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.matchId = params['uid'];
  		this.matchUser = params['name'];
  		this.matchUser = this.matchUser.charAt(0).toUpperCase() + this.matchUser.slice(1);
  		this.myMovieIds = JSON.parse(localStorage.getItem('myMovieIds')).myMovieIds;
  		this.movieService.getUserList(this.matchId).subscribe((matches) => {
  			// console.log(matches);
  			// console.log(this.myMovieIds);
  			this.otherMovies = matches.filter((match) => {
  				return this.myMovieIds.indexOf(match.id) === -1;
  			});
  			// console.log(this.otherMovies);
  		});
  	});
  }

 

}
