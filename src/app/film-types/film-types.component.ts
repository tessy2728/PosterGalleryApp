import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-types',
  templateUrl: './film-types.component.html',
  styleUrls: ['./film-types.component.css']
})
export class FilmTypesComponent implements OnInit {

  public pageTitle : string;

  constructor() { 
  	this.pageTitle = 'Film Categories'; 
  }

  ngOnInit() {
  }

}
