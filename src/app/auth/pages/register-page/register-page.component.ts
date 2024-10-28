import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
  public myForm: FormGroup;


  constructor (private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email], []],
      username: ['', [Validators.required, cantBeStrider], []],
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
