
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Google Materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryDetailComponent } from './library-detail/library-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrariesComponent,
    LibraryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
