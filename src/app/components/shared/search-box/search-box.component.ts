import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
	@Input() searchLabel: string;
	@Input() placeholder: string;
	@Input() inputClass: string;

	searchStr: string; //ngModel

  constructor() { }

  ngOnInit() {
  }

  search() {
  	console.log(this.searchStr);
  }

}
