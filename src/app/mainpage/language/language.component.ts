import { Component } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { MainpageService } from '../../services/mainpage.service';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  languageSelection:FormGroup
  languages:any;
  selectedValue: string;

  constructor(
    private FormBuilder: FormBuilder,
    private authservice: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private mainpageService: MainpageService

  ) { }
  getlanguages():void{
    this.mainpageService.getlanguages().subscribe(response => {
      console.log("Language",response)
      this.languages=response.data
    }, error =>{
      console.log("Language",error, 'error')

    })


  }


  initlanguageformForm(): void {
    this.languageSelection = this.FormBuilder.group({
      languages: ['', Validators.required]
    })

  }

  hide = true;
  ngOnInit(): void {
    this.initlanguageformForm();

  }

}
