import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  usersCache$ = new BehaviorSubject<any>({});
  userCache$ = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    // check if there is cached page
    const cachedUsers = this.usersCache$.getValue();
    if (cachedUsers && cachedUsers[page]) {
      return of(cachedUsers[page]);
    } else {
      const request$ = this.http.get(`${this.baseUrl}?page=${page}`).pipe(
        tap((response) => {
          const updatedCache = { ...cachedUsers, [page]: response };
          this.usersCache$.next(updatedCache);
        }),
        shareReplay(1)
      );
      return request$;
    }
  }

  getUserDetails(id: number): Observable<any> {
    console.log(id);
    
    // check if there is cached id
    const cachedUser = this.userCache$.getValue();
    if(cachedUser && cachedUser[id]){
      return of(cachedUser[id]);
    }else{
      const request$ = this.http.get(`${this.baseUrl}/${id}`).pipe(
        tap((response) => {
          const updatedCache = {...cachedUser, [id]: response};
          this.userCache$.next(updatedCache);
        }),
        shareReplay(1)
      );
      return request$;
    }
  }
}
