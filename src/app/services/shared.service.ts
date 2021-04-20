import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {

  sharedValue: number;

  constructor() {
    this.sharedValue = Math.random();
  }

  // tslint:disable-next-line:typedef
  getSharedValue() {
    return this.sharedValue;
  }
}
