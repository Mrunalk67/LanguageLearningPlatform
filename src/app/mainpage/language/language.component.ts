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
  name:any;
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
    this.mainpageService.getlanguages().subscribe((response: any[]) => {
      console.log("Languages", response);
      // Assuming 'response' is the array of language objects
      this.languages = response; // Store the languages array in a component property
      // Log each language's name (optional)
      response.forEach(language => {
          console.log('Language Name:', language.name);
      });
    }, error =>{
      console.log("Language",error, 'error')
 
    })
 
 
  }

  Submit(){
    const formData = this.languageSelection.getRawValue();
    const payload = {
      languages: formData.languages,
    }
    console.log('payload', payload)

    this.mainpageService.languages(payload).subscribe(response => {
      // Check if the token is not empty or null
      if (response) {
        this.snackBar.open("Language Selected Successfully", "OK");
        this.router.navigateByUrl('/mainpage/materials');
      } else {
        this.snackBar.open("Error", "OK");
      }
    });
  }
 
 
  initlanguageformForm(): void {
    this.languageSelection = this.FormBuilder.group({
      languages: ['', Validators.required]
    })
 
  }
 
  hide = true;
  ngOnInit(): void {
    this.initlanguageformForm();
    this.getlanguages();
  }
 
}