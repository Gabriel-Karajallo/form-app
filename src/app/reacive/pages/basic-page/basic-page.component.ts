import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PristineChangeEvent, Validators } from '@angular/forms';


const rtx5090 = {
  name: '',
  price: 0,
  inStorage: 0
}


@Component({
  templateUrl: './basic-page.component.html',
  styles: [

  ]
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],

    })
  }

  ngOnInit(): void {
    this.myForm.reset(rtx5090)
  }

  // simplificar la forma de como se va a ejecutar la validacion si el campo es valido o no
  isValidField( field: string ): boolean | null{
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }


  getFieldError( field: string ): string | null{

     if( !this.myForm.controls[field] )  return null;

     const errors = this.myForm.controls[field].errors || {};

     for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres`;
      }
     }

     return null
  }

  onSave(): void {
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)

    this.myForm.reset({ price: 0, inStorage: 0 })
  }
}
