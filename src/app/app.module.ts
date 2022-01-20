import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ComponentOne } from './app.ComponentOne';
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './throtting/app.DebounceComponent';
import { DomComponent } from './throtting/element-ref/DOMComponent';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentOne,
    DebounceComponent,
    DomComponent,
  ],
  bootstrap: [AppComponent, ComponentOne],
})
export class AppModule {}
