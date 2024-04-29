import { Component,OnInit  } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-englishassessments',
  templateUrl: './englishassessments.component.html',
  styleUrls: ['./englishassessments.component.css']
})
export class EnglishassessmentsComponent implements OnInit{
  questions = [
    {
      text: 'Choose the word that best completes the sentence:The novels plot was so __________ that I couldnt put it down',
      options: ['complex', 'intriguingc', 'mundaned', 'ambiguous'],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      text: 'Who wrote "To Kill a Mockingbird"?',
      options: ['J.K. Rowling', 'Harper Lee', 'Stephen King', 'Mark Twain'],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      text: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctAnswer: 1,
      selectedAnswer: null
    },
    {
      text: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo'],
      correctAnswer: 0,
      selectedAnswer: null
    },
    {
      text: 'What year did the Titanic sink?',
      options: ['1905', '1912', '1918', '1923'],
      correctAnswer: 1,
      selectedAnswer: 0
    },
  ];

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  selectOption(questionIndex: number, optionIndex: number) {
    this.questions[questionIndex].selectedAnswer = optionIndex;
  }

  submitQuiz() {
    let score = 0;
    this.questions.forEach(question => {
      if (question.selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
    // alert(`Your score is: ${score}/${this.questions.length}`);
    const totalScore='Your Score is :'+ score.toString()
    this.snackBar.open(totalScore, 'OK');
  }


  ngOnInit(): void {
  }

  GotoMaterials(){
    this.router.navigateByUrl('mainpage/englishmaterials');


  }

}
