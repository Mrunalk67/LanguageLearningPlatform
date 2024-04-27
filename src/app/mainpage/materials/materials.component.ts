import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  GotoAssesments(){
    this.router.navigateByUrl('/mainpage/assesments');
  }

  ngOnInit(): void {
    
  }

}
