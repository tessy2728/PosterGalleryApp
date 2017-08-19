import { Component, ViewChild } from '@angular/core';
import { Poster } from './Poster';
import { HeaderComponent } from '../header/header.component';
import { SearchFilterPipe } from '../search.filter'

import { PosterService } from './poster.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Component({
    selector: 'poster-list',
    templateUrl: './poster.component.html',
    providers: [PosterService, SearchFilterPipe]
})

export class PosterComponent {
    posterList : Poster[];
    public pageTitle : string;
    public txtPosterName : string = '';
    @ViewChild(HeaderComponent) header: HeaderComponent;
    
    public posterAlbumCount : number = 0;

    constructor(private posterService : PosterService) {
    	this.pageTitle = 'Romantic Comedy';
    }
    ngOnInit(): void {
        this.header.backBtn = true;
        this.header.searchIcon = true;
        console.log(this.header)
        this.txtPosterName = this.header.txtPosterName;
        this.posterAlbumCount++;
        this.posterService.getPosterList1()
        .subscribe(posterList => {this.posterList = posterList.page.content_items.content;});

    }
    onScrollDown () {
        console.log('scrolled down!!')
        if(this.posterAlbumCount === 1) {
            this.posterAlbumCount++;
            this.posterService.getPosterList2()
            .subscribe(response => {this.posterList = this.posterList.concat(response.page.content_items.content);});
        } else if(this.posterAlbumCount === 2) {
            this.posterAlbumCount++;
            this.posterService.getPosterList3()
            .subscribe(response => {this.posterList = this.posterList.concat(response.page.content_items.content);});
        }

    }
    loadMore () {
        console.log('loading more!')
    }
}