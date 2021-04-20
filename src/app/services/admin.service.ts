import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {Admin} from '../admin';

@Injectable()
export class AdminService {

  baseUrl = 'http://localhost:4200/api';

  constructor(
    private loggingService: LoggingService,
    private httpClient: HttpClient) {
  }

  isLoggedIn(): boolean {
    return true;
  }

  getAdmins(params: HttpParams): Observable<Admin[]> {
    let adminList: Admin[];
    adminList = [
      new Admin(1, 'Mark01', '123456'),
      new Admin(2, 'Tom02', '123456'),
      new Admin(3, 'Bob03', '123456')
    ];

    this.loggingService.log('List of admins: ' + adminList);

    return of(adminList);
  }
}
