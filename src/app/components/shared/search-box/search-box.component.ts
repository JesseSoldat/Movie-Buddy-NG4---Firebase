import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() filterText = new EventEmitter<string>();
  @Output() searchOtherList = new EventEmitter<string>();

	@Input() placeholder: string;
  @Input() searchList: string;

	searchStr: string; //ngModel

  change() {
    this.filterText.emit(this.searchStr);
  }

  SearchOtherLists() {
    this.searchOtherList.emit();
  }


}
