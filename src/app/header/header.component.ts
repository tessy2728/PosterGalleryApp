import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('title') title:string="";
  txtPosterName : string = ''
  public backBtn : boolean = false;
  public searchIcon : boolean = false;
  public searchMode : boolean = false;
  public searchTerm : string;

  constructor() { 
 	
  }

  ngOnInit() {
  }

}
