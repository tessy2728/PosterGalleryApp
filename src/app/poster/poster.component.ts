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
    constructor(private posterService : PosterService) {}
    ngOnInit(): void {
        this.posterService.getPosterList()
        .subscribe(posterList => this.posterList = posterList.page.content_items.content);
    }
}