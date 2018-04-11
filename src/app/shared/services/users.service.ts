import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserByName(username: string): Observable<User> {
    return this.http.get(`http://localhost:3001/users?name=${username}`)
      // .map((response: HttpResponse) => response)
      .map((user: User) => user[0] ? user[0] : undefined);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post(`http://localhost:3001/users`, user)
      .map((createdUser: User) => createdUser);
  }
}
