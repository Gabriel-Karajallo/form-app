import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {
  public myForm: FormGroup;


  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      gender: ['', Validators.required],
      wantNotification: [true, Validators.required],
      termsAndConditions:[false, Validators.requiredTrue],
    })
  }



  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
  }


  // --------------------------------------VALIDACION--------------------------------------------------
  isValidField( field: string ): boolean | null{
    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
  }
// ----------------------------------------------------------------------------------------------------





}
