import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { Poster } from './Poster';

@Injectable()
export class PosterService {
    private poster1URL = 'json/CONTENTLISTINGPAGE-PAGE1.json';
    private poster2URL = 'json/CONTENTLISTINGPAGE-PAGE2.json';
    private poster3URL = 'json/CONTENTLISTINGPAGE-PAGE3.json';
    constructor(private _http: Http){} 
    getPosterList1() {
        return this._http.get(this.poster1URL) 
        .map((res:Response) => res.json())
        .do(data => console.log(JSON.stringify(data)));
    }
    getPosterList2() {
        return this._http.get(this.poster2URL) 
        .map((res:Response) => res.json());
    }
    getPosterList3() {
        return this._http.get(this.poster3URL) 
        .map((res:Response) => res.json());
    }
}