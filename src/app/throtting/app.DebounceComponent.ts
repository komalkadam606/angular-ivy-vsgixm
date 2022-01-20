import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'debounce-sel',
  template: `<h1> Debounce 
  </h1> <input [ngModel]='prop' (ngModelChange)='searchValueChanged.next($event)' />`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DebounceComponent implements OnInit {
  prop: string = '';
  searchValueChanged: Subject<string> = new Subject<string>();
  private notesModelChangeSubscription: Subscription;
  constructor(private http: HttpClient) {
    //this.loadData();
  }
  ngOnInit() {

    
    //Debounce Code
    // this.notesModelChangeSubscription = this.searchValueChanged
    //   .pipe(debounceTime(4000), distinctUntilChanged())
    //   .subscribe((newText) => {
    //     this.loadData('');
    //     console.log(newText);
    //   });
    //throttleTime Code
    this.notesModelChangeSubscription = this.searchValueChanged
      .pipe(throttleTime(4000))
      .subscribe((newText) => {
        this.loadData('');
        console.log(newText);
      });
  }
  filterTextChanged() {
    console.log('observers Length');
    let observerArray = [];
    this.searchValueChanged.forEach((eachObserver: any) => {
      observerArray.push(eachObserver);
    });
    if (observerArray.length === 0) {
      this.searchValueChanged
        .pipe(debounceTime(4000), distinctUntilChanged())
        .subscribe(() => {
          this.loadData('');
        });
    }
    this.searchValueChanged.next(this.prop);
  }
  loadData(valueTopass: any) {
    console.log('valueTopass', this.prop);
    this.http
      .get(
        'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'
      )
      .subscribe((responseData: any) => {
        console.log('responseData', responseData);
      });
  }
}

// Publish
