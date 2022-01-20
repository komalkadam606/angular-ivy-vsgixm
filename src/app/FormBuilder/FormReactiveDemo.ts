import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  template: `
  
  <form [formGroup] = "contactForm" (ngSubmit) = "onSubmit()">
   <input id = "firstName" formControlName="firstName">
  </form>
  `,
})
export class FormReactiveDemo {
  //	firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
  // Form Controls can be repitative so we can use  formBuilder // as well

  constructor() {}

  validatorFunction() {}
}
