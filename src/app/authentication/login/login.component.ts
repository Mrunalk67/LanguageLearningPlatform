import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    
  ){}
  login(): void{
  }
  
  hide=true;
  ngOnInit(): void {
      
  }

}
