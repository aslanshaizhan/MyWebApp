import { Component, OnInit } from '@angular/core';
import {LawService} from '../services/law.service';
import {Law} from '../law';

@Component({
  selector: 'app-laws-list',
  templateUrl: './laws-list.component.html',
  styleUrls: ['./laws-list.component.scss']
})
export class LawsListComponent {

  lawList: Law[] = [];

  constructor(private lawService: LawService) {
  }

  // tslint:disable-next-line:typedef
  getLaws() {
    this.lawList = this.lawService.getLaws();
  }
}
