import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BasicComponent }  from './app.component';
import { PosterComponent } from './poster/poster.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterPipe } from './search.filter'
import { FilmTypesComponent } from './film-types/film-types.component';

const appRoutes: Routes = [{ 
	path: '', redirectTo: 'categories', pathMatch: 'full' }, {
  	path: 'categories' , component: FilmTypesComponent}, {
  	path: 'posters' , component: PosterComponent}]

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes), HttpModule, InfiniteScrollModule, Ng2ImgFallbackModule, FormsModule ],
  declarations: [ BasicComponent, PosterComponent, HeaderComponent, FilmTypesComponent, SearchFilterPipe ],
  bootstrap:    [ BasicComponent ]
})
export class AppModule { }
