import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private authservice: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
    
  ){}
  login(): void{
    const formData = this.loginform.getRawValue();
    const payload = {
      email: formData.email,
      password: formData.password
    }
    console.log('payload',payload)
    this.authservice.login(payload).subscribe(response =>{
      console.log('loginSubmitted',response)
      if(response.statusCode===200){
        this.snackBar.open("Login Successfully","OK")
        this.router.navigateByUrl('/home');
      }
      else{
        this.snackBar.open("User not found","OK")
      }
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
