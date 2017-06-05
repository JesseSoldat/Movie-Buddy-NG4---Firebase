import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie';
import * as _ from 'lodash';


@Component({
  selector: 'app-movie-matches',
  templateUrl: './movie-matches.component.html',
  styleUrls: ['./movie-matches.component.css']
})
export class MovieMatchesComponent implements OnInit {
  uid: string;
	matchId: string;
	matchUser: string;
	myMovieIds;
	otherMovies;

	isAuthenticated: boolean = true;

  filterTextLength: number = 25;

  constructor(private router: Router,
  						private route: ActivatedRoute,
  						private movieService: MovieService) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.matchId = params['uid'];
  		this.matchUser = params['name'];
  		localStorage.setItem('matchUser', JSON.stringify({ uid: this.matchId, name: this.matchUser }));
  	
      this.uid = JSON.parse(localStorage.getItem('user')).uid;


  		this.movieService.getUserList(this.matchId).subscribe((matches) => {

        this.movieService.getFavorites(this.uid).subscribe((myMovies) => {
        
          let myIdArray = [];
          myMovies.forEach((movie) => {
            myIdArray.push(movie.id);
          });
          // console.log(myIdArray);
          this.myMovieIds = myIdArray;

            this.otherMovies = matches.filter((match) => {
                return this.myMovieIds.indexOf(match.id) === -1;
              });
              // console.log(this.otherMovies);
            });

        });
         		
  	});
  }

 

}
