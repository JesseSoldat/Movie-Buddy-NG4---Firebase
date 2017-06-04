import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() filterText = new EventEmitter<string>();
  @Output() searchOtherList = new EventEmitter<string>();

	@Input() placeholder: string;
	@Input() inputClass: string;
  @Input() searchList: string;

	searchStr: string; //ngModel

  constructor() { 
  }

  ngOnInit() {
  
  }

  change() {
    this.filterText.emit(this.searchStr);
  }

  SearchOtherLists() {
    this.searchOtherList.emit();
  }


}
