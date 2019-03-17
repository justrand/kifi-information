import { LibraryList } from './library-list';
import {Library} from './library';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {
    this.libraryUrl = 'https://api.kirjastot.fi/v4/library?city.name=jyväskylä&limit=30';
  }
  libraryUrl: string;
  headers: string[];
  libraryList: LibraryList;

  private getLibrariesFromREST(): Observable<HttpResponse<LibraryList>> {
    return this.http.get<LibraryList>(this.libraryUrl, { observe: 'response' });
  }

  /**
   * Returns an observable library list object
   */
  getLibraries(): Observable<HttpResponse<LibraryList>>{
    let result = this.http.get<LibraryList>(this.libraryUrl, { observe: 'response' });
    result.subscribe(response => {this.libraryList = response.body});
    return result;
  }

  /**
   * Returns a single library
   * @param id the id of the library to get
   * @returns Observable<Library>
  */
  getLibrariesWithId(id: number): Observable<LibraryList> {
    const url = 'https://api.kirjastot.fi/v4/library?id='+id;
    return this.http.get<LibraryList>(url).pipe(
      tap(_ => console.log('Fetched Library id='+id)),
      catchError(this.handleError<LibraryList>(`getLibary id = ${id}`))
    );
  }


  geLibariesAlt (): Observable<LibraryList> {
    return this.http.get<LibraryList>(this.libraryUrl)
      .pipe(
        catchError(this.handleError<LibraryList>('geLibariesAlt'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
