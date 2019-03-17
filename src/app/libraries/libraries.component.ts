import { LibraryService } from './../library.service';
import { Component, OnInit } from '@angular/core';
import {LibraryList} from './../library-list';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  libraries: LibraryList;
  ngOnInit() {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries().subscribe(resp => {

      // access the body directly, which is typed as `LibraryList`.
      this.libraries = { ... resp.body };
    });
  }


}
