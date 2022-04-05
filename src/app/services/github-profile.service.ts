import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/apiResponse';

@Injectable({
  providedIn: 'root',
})
export class GithubProfileService {
  constructor(private _http: HttpClient) {}

  private baseUrl: string = 'https://api.github.com';

  getAllProfiles(): Observable<User[]> {
    return this._http.get<User[]>(`${this.baseUrl}/users`);
  }

  getProfileFullInfo(login: string): Observable<User> {
    return this._http.get<User>(`${this.baseUrl}/users/${login}`);
  }
}
