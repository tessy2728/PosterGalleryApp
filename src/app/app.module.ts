import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BasicComponent }  from './app.component';
import { PosterComponent } from './poster/poster.component';

const appRoutes: Routes = [{ 
	path: '', redirectTo: 'posters', pathMatch: 'full' }, {
  	path: 'posters' , component: PosterComponent}]

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ BasicComponent, PosterComponent ],
  bootstrap:    [ BasicComponent ]
})
export class AppModule { }
