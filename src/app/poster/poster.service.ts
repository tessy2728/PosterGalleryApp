import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { Poster } from './Poster';

@Injectable()
export class PosterService {
    private posterURL = 'json/CONTENTLISTINGPAGE-PAGE1.json';
    constructor(private _http: Http){} 
    getPosterList() {
        return this._http.get(this.posterURL) 
        .map((res:Response) => res.json())
        .do(data => console.log(JSON.stringify(data)));
    }
}