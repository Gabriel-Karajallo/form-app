import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
  public myForm: FormGroup;


  constructor (private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required], []],
      username: ['', [Validators.required], []],
      password: ['', [Validators.required, Validators.minLength(6)], []],
      password2: ['', [Validators.required], []],
    });
  }

  isValidField( field: string){
    //TODO: OBTENER VALIDACION DESDE UN SERVICIO
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
