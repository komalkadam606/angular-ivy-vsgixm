import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! {{message}}</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Input() message: string;
  @Output() eventName: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    console.log('message', this.message);
    this.eventName.emit();
    // Creating Observable
    new Observable((observer) => {
      observer.complete();
      observer.next();
      observer.error();
    }).pipe(
      switchMap((value) => {
        console.log('Valuefrom Switchmap', value);
        return of([1, 2, 3]);
      })
    );
  }
}

// Publish
