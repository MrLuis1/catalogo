import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeneralValidatorService {

  constructor() { }

  validEqualFields( field1: string, field2: string ) {
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const formValue1 = formGroup.get(field1)?.value;
      const formValue2 = formGroup.get(field2)?.value;

      if( formValue1 !== formValue2 ) {
        formGroup.get(field2)?.setErrors({notEqual: true});
        return {notEqual: true}
      }
      
      formGroup.get(field2)?.setErrors(null);
      return null
    }
  }
}
