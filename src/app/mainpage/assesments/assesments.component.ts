import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.css']
})
export class AssesmentsComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  GotoMaterials(){
    this.router.navigateByUrl('/mainpage/materials');
  }

  ngOnInit(): void {
    
  }

}
