import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signup: FormGroup;

constructor(
  private FormBuilder: FormBuilder,
  private authservice: AuthService,
  private snackBar: MatSnackBar,
  private router: Router
){}

signUp(){
  const formData = this.signup.getRawValue();
    const payload = {
      name:formData.name,
      email: formData.email,
      password: formData.password
    }
    console.log('payload', payload)

    this.authservice.register(payload).subscribe(response => { 
      // Check if the token is not empty or null
      if (response.status==200) {
        this.snackBar.open("SignedIn Successfully", "OK");
        this.router.navigateByUrl('/login');
      } else {
        this.snackBar.open("User already exixts", "OK");
      }
    });
    
  }

signUpinitForm(): void {
  this.signup = this.FormBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
}

hide=true;
ngOnInit(): void {
  this.signUpinitForm();
    
}



}
