import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private rs: RestService) { }

  columns = ['Article Id', 'Name', 'Issued By', 'Issued Date'];

  index = ['id', 'name', 'issuedBy', 'issuedDate'];

  articles: Article[] = [];
  article: any;

  ngOnInit(): void {
    this.rs.getArticles().subscribe
    (
      (response) =>
      {
        this.articles = response;
      },

      (error) =>
      {
        console.log('Error Occured : ' + error);
      }
    );
  }

}
