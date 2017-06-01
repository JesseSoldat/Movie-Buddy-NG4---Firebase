import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
	@Output() socialType = new EventEmitter<string>()
	@Input() social; 
  constructor() { 
  }

  ngOnInit() {
  }

  socialLogin(type) {
  	this.socialType.emit(type);
  }

}
