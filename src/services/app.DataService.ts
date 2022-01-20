import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

//observable - > state       observer.subscribe();

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sharingDataBehSubject: BehaviorSubject<number>;
  replaySubject: ReplaySubject<number>;
  constructor() {
    this.getEvent();
    // getPromise()
  }

  getData() {
    let data = [{ fName: 'abc', lName: 'xyz' }];
    return new Observable((observer) => {
      let returedData = data.map(
        (eachData: { fName: string; lName: string }) => {
          return { fName: 'tse' + eachData.fName, lName: eachData.lName };
        }
      );
      observer.next(returedData);
      observer.error();
      observer.complete();
    });
  }
  getEvent() {
    let subjectVal = new Subject(); // Can not pass intial value
    this.sharingDataBehSubject = new BehaviorSubject(789);

    this.replaySubject = new ReplaySubject(3, 40000);
  }
}
