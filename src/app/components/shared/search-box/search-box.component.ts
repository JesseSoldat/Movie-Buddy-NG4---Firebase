import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() filterText = new EventEmitter<string>();
	@Input() searchLabel: string;
	@Input() placeholder: string;
	@Input() inputClass: string;


	searchStr: string; //ngModel

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.filterText.emit(this.searchStr);
  }

  search() {
  	console.log(this.searchStr);
  }

}
