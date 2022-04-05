import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { TitleComponent } from './components/title/title.component';
import { SearchComponent } from './components/search/search.component';
import { GithubProfilesComponent } from './pages/github-profiles/github-profiles.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    GithubProfilesComponent,
    ProfileCardComponent,
  ],
  imports: [BrowserModule, PrimengModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
