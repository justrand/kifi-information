import { LibraryService } from './../library.service';
import { Component, OnInit } from '@angular/core';
import {Library} from '../library';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.scss']
})
export class LibraryDetailComponent implements OnInit {
  library: Library;

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService,
    private location: Location
  ) { }



  ngOnInit() {
    this.getLibrary();
  }

  getLibrary(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.libraryService.getLibrariesWithId(id)
      .subscribe(libraryList => this.library = libraryList.items[0]);
  }

  goBack(): void {
    this.location.back();
  }

}
