import { Component, Input } from '@angular/core';
import { DataService } from '../services/app.DataService';

@Component({
  selector: 'compoenent-one',
  template: `<h1>compoenent-one!  <hello  (eventName)= 'functionName($event)' [message] = "messageToPass" > </hello></h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class ComponentOne {
  messageToPass = 'Hi From Parent';
  constructor(dataService: DataService) {
    dataService.sharingDataBehSubject.subscribe({
      next: (value: any) => {
        console.log('Got message from App compoenn', value);
      },
      error: (errorCode: any) => {},
      complete: () => {},
    });
    dataService.sharingDataBehSubject.next(567);
  }
  functionName(paramter: Event) {
    console.log('paramter', paramter);
  }
}
