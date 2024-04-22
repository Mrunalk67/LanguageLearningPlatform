import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signup: FormGroup;

constructor(
  private FormBuilder: FormBuilder
){}

signUp(){
    
  }

hide=true;
ngOnInit(): void {
    
}



}
