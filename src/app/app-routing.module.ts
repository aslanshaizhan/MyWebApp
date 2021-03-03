import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {NewsMixComponent} from './news-mix/news-mix.component';
import {TvNewsComponent} from './tv-news/tv-news.component';
import {LawsComponent} from './laws/laws.component';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'news-mix', component: NewsMixComponent},
  {path: 'tv-news', component: TvNewsComponent},
  {path: 'laws', component: LawsComponent},
  {path: '', redirectTo: 'mainNews', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
