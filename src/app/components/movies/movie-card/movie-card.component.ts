import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
	@Input() movie;
  @Input() heart;
  @Input() filterTextLength;

  currentSearch;
  @Output() newSearch = new EventEmitter<any>();
  constructor(private router: Router,
              private movieService: MovieService) { 
  }

  ngOnInit() {
 
  
  }
  ngOnChanges() {

  }

  detailsPage(movie) {
  	this.router.navigate(['movie-details', {id: movie.id}]);
  }

  addToFavorites(movie) {    
    this.movieService.getSingleMovie(movie.id).subscribe((movie) => {
      this.movieService.addToFavorites(movie).then((res) => {
        this.currentSearch = JSON.parse(localStorage.getItem('currentSearch')).searchRes;
        let newList = this.currentSearch.filter((current) => {
          return movie.id != current.id;
        });
        this.newSearch.emit(newList);
      });
    });
  }

  removeFromFavorites(movie) {
    console.log(movie);
    let key = movie.$key;
    this.movieService.removeFromFavorites(key);
  }

}
