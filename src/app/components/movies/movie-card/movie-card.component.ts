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
  @Input() nav;
  key: string;
  uid: string;
 
  currentSearch;
  @Output() newSearch = new EventEmitter<any>();
  constructor(private router: Router,
              private movieService: MovieService) {
   this.uid = JSON.parse(localStorage.getItem('user')).uid; 
    // console.log('Movie Card');
    // console.log(this.uid); 
  }

  ngOnInit() { 
  }

  detailsPage(movie, heart) {
    if(heart === 'heart') {
      this.key = movie.$key
      this.router.navigate(['movie-details', {id: movie.id, key: this.key, nav: this.nav}]);
    }
    if(heart === '!heart') {
     this.router.navigate(['movie-details', {id: movie.id, nav: this.nav}]); 
    }
  	
  }

  addToFavorites(movie) {    
    this.movieService.getSingleMovie(movie.id).subscribe((movie) => {
      this.movieService.addToFavorites(movie, this.uid).then((res) => {
        this.currentSearch = JSON.parse(localStorage.getItem('currentSearch')).searchRes;
        let newList = this.currentSearch.filter((current) => {
          return movie.id != current.id;
        });
        this.newSearch.emit(newList);
      });
    });
  }

  removeFromFavorites(movie) {
    let key = movie.$key;
    // console.log(key);
    this.movieService.removeFromFavorites(key, this.uid);
  }

}
