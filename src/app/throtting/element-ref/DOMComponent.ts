import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dom-ele',
  template: ` <button #btn> Click FromEvent  </button>  
   <input type="text" #searchBox value="" />
  `,
})
export class DomComponent implements OnInit, AfterViewInit {
  @ViewChild('btn', { read: ElementRef }) button;
  @ViewChild('searchBox', { read: ElementRef }) serachBox;
  ngOnInit() {
    console.log(this.button.nativeElement);
  }
  ngAfterViewInit() {
    // Using normal Button Click Event
    // fromEvent(this.button.nativeElement, 'click').subscribe((res) => {
    //   console.log('Res123', res);
    // });
    // Using Input Event
    // fromEvent(this.serachBox.nativeElement, 'input').subscribe(
    //   (res: InputEvent) => {
    //     console.log('input response', res.data);
    //   }
    // );

    // Using Pipe operator
    const typeahead$ = fromEvent(this.serachBox.nativeElement, 'input').pipe(
      map((e: any) => (e.target as HTMLInputElement).value),
      filter((text) => text.length > 2),
      tap((val) => console.log('value-tap', val))
    );
    typeahead$.subscribe((finalVal) => console.log('FinalVal', finalVal));
  }
}
