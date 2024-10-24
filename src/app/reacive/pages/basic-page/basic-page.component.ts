import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PristineChangeEvent, Validators } from '@angular/forms';


const rtx5090 = {
  name: '',
  price: 2500,
  inStorage: 6
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
  isValidField( field: string ) {
    return this.myForm.controls['name'].getError('required') && myForm.controls['name'].touched
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
