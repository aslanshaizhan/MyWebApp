import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laws-list',
  templateUrl: './laws-list.component.html',
  styleUrls: ['./laws-list.component.scss']
})
export class LawsListComponent implements OnInit {

  constructor() { }
  public new = '';
  public name = 'New Law  ';

  ngOnInit(): void {
  }

}
