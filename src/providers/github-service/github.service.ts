import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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

  constructor() {
    console.log('Constructing GithubServiceProvider Provider');
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(u => u.name === username)[0]); //finding the username from within User_List equal to the passed in username
  }


  mockGetRepositoryInformation(username: string) : Observable<Repository[]> {

    return Observable.for(REPOSITORY_LIST.filter(r => r.owner.name == username));

  }

}
