import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SectionComponent } from './section/section.component';
import { NewsMixComponent } from './news-mix/news-mix.component';
import { VideoTvComponent } from './video-tv/video-tv.component';
import { TvNewsComponent } from './tv-news/tv-news.component';
import { LawsListComponent } from './laws-list/laws-list.component';
import { LawsComponent } from './laws/laws.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    SectionComponent,
    NewsMixComponent,
    VideoTvComponent,
    TvNewsComponent,
    LawsListComponent,
    LawsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
