import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterText'})
export class FilterTextPipe implements PipeTransform {
	transform(item, filter = 25) {
		if(!item) {
			return item;
		}
		return this.applyFilter(item, filter);
	}

	applyFilter(item, filter) {
		if(item.length >= filter) {
			let newItem = item.substring(0, filter);
			return (newItem + '...');
		}
		return item;
	}
}