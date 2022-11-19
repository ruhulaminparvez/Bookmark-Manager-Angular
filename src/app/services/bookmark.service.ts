import { Injectable } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Bookmark, Bookmarks} from '../bookmark/state';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BookmarkService {

  private FAKE_API_SERVER = 'http://localhost:5000/api/bookmarks/';

  constructor(private httpClient: HttpClient) {}


  private dummyBookmarks: Bookmarks = {
      bookmarks: [
          {id: '1000', name: 'ruhulaminparvez', url: 'www.ruhulaminparvez.netlify.app', group: 'portfolio'},
          {id: '1001', name: 'w3schools', url: 'www.w3schools.com', group: 'learning'},
      ]
  };

  getDummyBookmarks(): Observable<Bookmarks>{
      console.log('SERVICE getDummyBookmarks');
      return new Observable(observer => {
          setTimeout(() => {
              console.log('SERVICE getDummyBookmarks Done waiting');
              observer.next(this.dummyBookmarks);
              observer.complete();
          }, 3000);
      });
  }

  getBookmarks(): Observable<Bookmark[]>{
    return this.httpClient.get<Bookmark[]>(this.FAKE_API_SERVER);
  }

  deleteBookmarks(id: string): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.FAKE_API_SERVER + id);
  }

}
