import { Component, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/app.DataService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private dataService: DataService,
    activatedRoute: ActivatedRoute
  ) {
    this.getData();
    this.getReplayData();
  }
  getReplayData() {
    this.dataService.replaySubject.subscribe((data) => {
      console.log('rplay Data', data);
    });
  }
  getData() {
    this.dataService.getData().subscribe({
      next: (data: any) => {
        console.log('Datasdssd', data);
      },
      error: () => {},
      complete: () => {
        console.log('Complete');
      },
    });
  }
  sendMessage() {
    console.log(this.dataService.sharingDataBehSubject.getValue());
    // You can send events To BehaviorSubject
    this.dataService.sharingDataBehSubject.next(420);
    this.dataService.replaySubject.next(Math.random());
  }
}
