import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {NewsMixComponent} from './news-mix/news-mix.component';
import {TvNewsComponent} from './tv-news/tv-news.component';
import {LawsComponent} from './laws/laws.component';
import {ErrorComponent} from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import {AdminGuard} from './guards/admin-guard.service';
import {ArticleComponent} from './article/article.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'news'},
  {path: 'news', component: NewsComponent},
  {path: 'news-mix', component: NewsMixComponent},
  {path: 'tv-news', component: TvNewsComponent},
  {path: 'laws', component: LawsComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  {path: 'article', component: ArticleComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
