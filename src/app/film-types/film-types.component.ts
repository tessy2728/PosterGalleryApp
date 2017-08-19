import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-film-types',
  templateUrl: './film-types.component.html',
  styleUrls: ['./film-types.component.css']
})
export class FilmTypesComponent implements OnInit {

  public pageTitle : string;
  @ViewChild(HeaderComponent) header: HeaderComponent;

  constructor() { 
  	this.pageTitle = 'Film Categories'; 
  	
  }

  ngOnInit() {
    this.header.backBtn = false;
    this.header.searchIcon = false;
  }

}
