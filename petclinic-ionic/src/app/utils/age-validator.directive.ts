import { Directive } from '@angular/core';
import {NG_VALIDATORS, Validator} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';

@Directive({
  selector: '[ageValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})
export class AgeValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    let age = control.value;
    return age < 1 || age > 30 ? { 'ageValidator': true } : null;
  }

}

