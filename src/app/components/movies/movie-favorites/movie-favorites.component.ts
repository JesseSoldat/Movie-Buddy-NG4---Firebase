import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie';
import * as _ from 'lodash';

declare let jQuery: any;

@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.component.html',
  styleUrls: ['./movie-favorites.component.css']
})
export class MovieFavoritesComponent implements OnInit {
	uid: string;
	isAuthenticated: boolean = true;
	isFavorite;
  heart: boolean = true;
  //Pipes
	filterTextLength: number = 25;
  filterListBy: string; //ngModel on text input

  allUsersMovieIds = []; //
  myMovieIds = [];
  isMatchNoMatchList = [];


  constructor(private movieService: MovieService) { 
  	this.uid = JSON.parse(localStorage.getItem('user')).uid;
  }

  ngOnInit() {
  	this.movieService.getFavorites(this.uid).subscribe((fav) => {
  		this.isFavorite = fav;
  	  // console.log(this.isFavorite);
  	});

    jQuery("#myModal").on("hide.bs.modal", () => {
      
    });
  }

  onFilterText(event) {
    this.filterListBy = event;
  }

  cancel() {

  }

  searchOtherList() {
    jQuery('#myModal').modal('show');
    this.movieService.getOtherLists().subscribe((users) => {
      
     let array;
      users.forEach((user) => {
        if(this.uid === user.$key) {
          for(let key in user.movies) {
            
            if (user.movies.hasOwnProperty(key)) { 
                var value = user.movies[key];
                this.myMovieIds.push(value.id);
              }
          } //for    
        }

        if(this.uid !== user.$key) {
          let tempArray = [];
          tempArray.push(user.$key);

          for(let key in user.movies) {
            
            if (user.movies.hasOwnProperty(key)) { 
                var value = user.movies[key];
         
                tempArray.push(value.id);
              }
          } //for
        this.allUsersMovieIds.push(tempArray);       
        }

      }); //forEach
     
      this.allUsersMovieIds.forEach((array) =>  {
        // console.log(array);
        let matchObj = {
          uid: array[0],
          isMatch:  _.intersection(this.myMovieIds, array),
          noMatch: _.difference( this.myMovieIds, array),
          length: 0
        };
        let length = matchObj.isMatch.length;
        matchObj.length = length;

        this.isMatchNoMatchList.push(matchObj);
      });

    //  function compare(b,a) {
    //   if (a.length < b.length)
    //     return -1;
    //   if (a.length > b.length)
    //     return 1;
    //   return 0;
    // }
    this.isMatchNoMatchList = _.sortBy(this.isMatchNoMatchList, (obj) => {
      obj.length
    }).reverse();

    // this.isMatchNoMatchList.sort(compare); 
     // console.log(this.isMatchNoMatchList);
    });

   } 
   

   

}
