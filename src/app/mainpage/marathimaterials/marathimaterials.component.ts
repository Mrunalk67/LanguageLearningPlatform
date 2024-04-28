import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-marathimaterials',
  templateUrl: './marathimaterials.component.html',
  styleUrls: ['./marathimaterials.component.css']
})
export class MarathimaterialsComponent {
  vocabdata=[ 
    { 
      name:"Learn words with Flashcards and other activities", 
      url:"https://www.vocabulary.com/lists/52473"
    }, 
    { 
      name:"Learn English", 
      url:"https://learnenglish.britishcouncil.org/vocabulary"
    }, 
    { 
      name:"Cambridge English", 
      url:"https://www.cambridgeenglish.org/images/84669-pet-vocabulary-list.pdf"
    } 
  ] 
  grammardata=[ 
    { 
      name:"British Grammar", 
      url:"https://learnenglish.britishcouncil.org/grammar/english-grammar-reference"
    }, 
    { 
      name:"BYJU's", 
      url:"https://byjus.com/english/english-grammar/"
    }, 
    { 
      name:"English Club", 
      url:"https://www.englishclub.com/grammar/"
    } 
  ] 
  videodata=[ 
    { 
      name:"British Grammar", 
      url:"https://learnenglish.britishcouncil.org/grammar/english-grammar-reference"
    }, 
    { 
      name:"BYJU's", 
      url:"https://byjus.com/english/english-grammar/"
    }, 
    { 
      name:"English Club", 
      url:"https://www.englishclub.com/grammar/"
    } 
  ]
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  GotoAssesments(){
    this.router.navigateByUrl('/mainpage/marathiassessments');
  }

  ngOnInit(): void {
    
  }

}
