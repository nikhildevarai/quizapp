import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import ActivatedRoute
// ... (other imports)

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  quizQuestions: any[] = [];
  selectedAnswers: string[] = [];
  correctAnswers: string[] = [];
  scoreReady: boolean = false;
  score: number = NaN;

  constructor(private route: Router) {} // Inject ActivatedRoute

  ngOnInit() {
    if (
      !localStorage.getItem('quizQuestions') ||
      !localStorage.getItem('selectedAnswers') ||
      !localStorage.getItem('correctAnswers')
    ) {
      this.route.navigate(['/']);
    }

    this.quizQuestions = JSON.parse(
      localStorage.getItem('quizQuestions') || '[]'
    );
    this.selectedAnswers = JSON.parse(
      localStorage.getItem('selectedAnswers') || '[]'
    );
    this.correctAnswers = JSON.parse(
      localStorage.getItem('correctAnswers') || '[]'
    );

    this.generateResult();
  }

  generateResult() {
    this.score = this.selectedAnswers.reduce((acc, current) => {
      return acc + (this.correctAnswers.indexOf(current) === -1 ? 0 : 1);
    }, 0);

    this.scoreReady = true;
  }

  createNewQuiz() {
    this.route.navigate(['/quiz']);
  }
}
