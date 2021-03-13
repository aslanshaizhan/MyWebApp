import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Law} from '../law';

@Injectable()
export class LawService {

  constructor(private loggingService: LoggingService) {
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

    this.loggingService.log('List of users: ' + lawList);

    return lawList;
  }
}
