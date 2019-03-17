import { Component } from '@angular/core';
import { LibraryService } from './library.service';
import {LibraryList} from './library-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kifi-style-app';

  public constructor() {}

}
