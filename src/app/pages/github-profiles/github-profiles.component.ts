import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/apiResponse';
import { GithubProfileService } from 'src/app/services/github-profile.service';

@Component({
  selector: 'app-github-profiles',
  templateUrl: './github-profiles.component.html',
  styles: [],
})
export class GithubProfilesComponent implements OnInit {
  public users: User[] = [];
  constructor(private _githubProfileService: GithubProfileService) {}

  ngOnInit(): void {
    this.loadGithubProfiles();
  }

  search(query: string): void {
    if (query.trim().length == 0) {
      this.loadGithubProfiles();
      return;
    }
    this.getGithubProfileByLogin(query);
  }

  loadGithubProfiles(): void {
    this._githubProfileService.getAllProfiles().subscribe(
      (response) => {
        this.users = response;

        this.users.forEach((user) => {
          this._githubProfileService
            .getProfileFullInfo(user.login)
            .subscribe((response) => {
              user.followers = response.followers;
              user.public_repos = response.public_repos;
              user.public_gists = response.public_gists;
            });
        });
      },
      (error) => console.error
    );
  }

  getGithubProfileByLogin(login: string): void {
    this._githubProfileService.getProfileFullInfo(login).subscribe(
      (response) => {
        this.users = [];
        this.users.push(response);
      },
      (error) => console.error
    );
  }
}
