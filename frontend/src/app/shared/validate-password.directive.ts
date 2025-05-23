import { Directive } from '@angular/core';

@Directive({
  selector: '[appValidatePassword]',
  standalone: false
})
export class ValidatePasswordDirective {

  constructor() { }

}
