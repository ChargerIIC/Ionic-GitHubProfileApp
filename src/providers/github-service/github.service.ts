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

  private baseUrl: string = 'https://api.github.com/users'
  private repoUrl: string = 'repos';

  constructor(private http: Http) {
    console.log('Constructing GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)//Note this is using a ` character instead of a single quote
    .map(this.extractData)
    .catch(this.handleError);
  }

  getRepositoryInformation(username: string) : Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.repoUrl}`)
    .map(this.extractData)
    .catch(this.handleError);
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(u => u.name === username)[0]); //finding the username from within User_List equal to the passed in username
  }

  mockGetRepositoryInformation(username: string) : Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(r => r.owner.name == username));
  }

private handleError(error: Response | any){
  return Observable.throw(error.json().error || "Unkown Server-side Error");
}

//While I'm normally all for removing redundant code, the following methods are one-liners with a poor code smell
  private extractData(response: Response): any{
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }

}
