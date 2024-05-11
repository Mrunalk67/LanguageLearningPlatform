import { Component, Input } from '@angular/core';
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
  @Input() email: any;
  languageSelection:FormGroup
  name:any;
  languages:any;
  selectedValue: string;
  userDetails:any;
 
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
      userEmail: this.authservice.email,
      languageId: formData.languages.id,
    }
    console.log('payload', payload)


    this.mainpageService.languages(payload).subscribe(response => {
      console.log(response)
      if (response.status==200) {
        this.snackBar.open("Language Selected Successfully", "OK");
        console.log(payload.languageId)
        const selectedlanguage=payload.languageId
        if(selectedlanguage == '1'){
          this.router.navigateByUrl('/mainpage/englishmaterials');
        }
        else if(selectedlanguage == '3'){
          this.router.navigateByUrl('/mainpage/marathimaterials');
        }
        else if(selectedlanguage == '2'){
          this.router.navigateByUrl('/mainpage/hindimaterials');
        }
    
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