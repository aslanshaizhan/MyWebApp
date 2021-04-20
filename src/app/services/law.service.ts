import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Law} from '../law';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LawService {

  baseUrl = 'http://localhost:4200/api';

  constructor(
    private loggingService: LoggingService,
    private httpClient: HttpClient) {
  }

  isLoggedIn(): boolean {
    return true;
  }

  // tslint:disable-next-line:typedef
  getLaws() {
    let lawList: Law[];
    lawList = [
      new Law(1, 'Human and humanity', 3),
      new Law(2, 'President', 5),
      new Law(3, 'Parlament', 4),
      new Law(4, 'Government', 1)
    ];

    this.loggingService.log('List of laws: ' + lawList);

    return lawList;
  }
}
