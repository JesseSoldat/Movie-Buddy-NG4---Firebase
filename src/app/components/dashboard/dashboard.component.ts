import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	//Navbar
	isAuthenticated:boolean = true;
	searchStr: string;
	searchRes;
	
  constructor(private movieService: MovieService) { }


  ngOnInit() {
  }

  searchMovies() {
  	this.movieService.searchMovies(this.searchStr).subscribe((movies) => {
  		this.searchRes = movies.results;
  		console.log(this.searchRes);
  	})
  }

}
