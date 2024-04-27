import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private authservice: AuthService,
  private snackBar: MatSnackBar,
  private router: Router
){}

signUp(){
  const formData = this.signup.getRawValue();
    const payload = {
      name:formData.name,
      email: formData.email,
      password: formData.password,
    }
 
    console.log('payload', payload)

    this.authservice.register(payload).subscribe(response => { 
      if (response.status==200) {
        this.snackBar.open("SignedIn Successfully", "OK");
        this.router.navigateByUrl('/login');
      } else {
        this.snackBar.open("User already exists", "OK");
      }
    });
    
  }
  formValidation(){
    return (!this.signup.valid) 
  }



signUpinitForm(): void {
  this.signup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },{
    validators:this.passwordMatcValidator('password','confirmPassword'),
  })
  
}

passwordMatcValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
          return null;
      }

      if (control!.value !== matchingControl!.value) {
        const error = { confirmedValidator: 'Passwords do not match.' };
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        return null;
      }
  }
}



hide=true;
ngOnInit(): void {
  this.signUpinitForm();   
}
}
