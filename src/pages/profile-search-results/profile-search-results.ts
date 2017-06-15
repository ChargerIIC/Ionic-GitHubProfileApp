import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { GithubService} from '../../providers/github-service/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  user: User;
  username: string;
  repos: Repository[];
  followers: User[];
  followerCount : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubSvc: GithubService, private appBrowser: InAppBrowser) {
  
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username)
    {
      this.getUserInformation(); //TODO: Why not get the user and pass it to the search results?
    }
  }

  getUserInformation(): void {
    //this.githubSvc.mockGetUserInformation(this.username).subscribe(d => (this.user = d));
    this.githubSvc.getUserInformation(this.username).subscribe(d => (this.user = d));
    //this.githubSvc.mockGetRepositoryInformation(this.username).subscribe((data:Repository[]) => this.repos=data);
    this.githubSvc.getRepositoryInformation(this.username).subscribe((data:Repository[]) => this.repos=data);
    //this.githubSvc.mockGetUserFollowingCount(this.username).subscribe(c => this.followCount = c);
    this.githubSvc.getUserFollowingCount(this.username).subscribe(c => {this.followers = c; this.followerCount = c.length});
  }

  launchBrowser(repo: string){
    this.appBrowser.create(`https://github.com/${this.username}/${repo}`);
  }
}
