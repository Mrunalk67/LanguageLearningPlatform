import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private authservice: AuthService
    
  ){}
  login(): void{
    const formData = this.loginform.getRawValue();
    const payload = {
      email: formData.email,
      password: formData.password
    }
    this.authservice.login(payload).subscribe(response =>{
      console.log('loginSubmitted',response)
    })
  }

  initloginForm():void{
    this.loginform=this.FormBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }
  
  hide=true;
  ngOnInit(): void {
    this.initloginForm();
      
  }

}
