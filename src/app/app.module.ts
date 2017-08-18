import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BasicComponent }  from './app.component';
import { PosterComponent } from './poster/poster.component';
import { HeaderComponent } from './header/header.component';
import { FilmTypesComponent } from './film-types/film-types.component';

const appRoutes: Routes = [{ 
	path: '', redirectTo: 'categories', pathMatch: 'full' }, {
  	path: 'categories' , component: FilmTypesComponent}, {
  	path: 'posters' , component: PosterComponent}]

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ BasicComponent, PosterComponent, HeaderComponent, FilmTypesComponent ],
  bootstrap:    [ BasicComponent ]
})
export class AppModule { }
