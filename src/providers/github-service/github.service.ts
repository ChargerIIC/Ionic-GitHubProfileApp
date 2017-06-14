import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

import { USER_LIST } from '../../mocks/user.mocks';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubService {

  private baseUrl: string = 'http://api.github.com/users'

  constructor(private http: Http) {
    console.log('Constructing GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do((d: Response) => console.log(d))
    .map((r: Response) => r.json())
    .do((d: Response) => console.log(d))
    .catch((e: Response) => Observable.throw(e.json().error || "Unkown Server-side Error"));
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(u => u.name === username)[0]); //finding the username from within User_List equal to the passed in username
  }


  mockGetRepositoryInformation(username: string) : Observable<Repository[]> {

    return Observable.of(REPOSITORY_LIST.filter(r => r.owner.name == username));

  }

}
