import { Component } from '@angular/core';
import { Poster } from './Poster';
import { PosterService } from './poster.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Component({
    selector: 'poster-list',
    templateUrl: './poster.component.html',
    providers: [PosterService]
})


export class PosterComponent {
    posterList : Poster[];
    public pageTitle : string;

    constructor(private posterService : PosterService) {
    	this.pageTitle = 'Romantic Comedy';
    }
    ngOnInit(): void {
        this.posterService.getPosterList()
        .subscribe(posterList => this.posterList = posterList.page.content_items.content);
    }
}