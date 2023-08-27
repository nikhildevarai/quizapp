import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { questionModel } from '../app.model';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent {
  @Input() quizQuestions: questionModel[] = [];
  @Input() correctAnswers: string[] = [];
  @Input() toJudge: string[] = [];
  @Input() isResultsPage: boolean = false;

  selectedOption: string[] = [];
  isFormSubmitted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (!this.isResultsPage) {
      this.selectedOption = [];
      this.isFormSubmitted = false;
      return;
    }

    this.selectedOption = this.toJudge;
    this.isFormSubmitted = true;
  }

  selectOption(option: string, questionNumber: number) {
    this.selectedOption[questionNumber] = option;
    // this.questionsAnswered = this.questionsAnswered + 1;
  }

  optionSelected(option: string, questionNumber: number) {
    return option === this.selectedOption[questionNumber];
  }

  answerIsCorrect(option: string, questionNumber: number) {
    return this.isFormSubmitted
      ? option === this.correctAnswers[questionNumber]
      : false;
  }

  answerIsWrong(option: string, questionNumber: number) {
    if (!this.isFormSubmitted) {
      return false;
    }

    if (option === this.correctAnswers[questionNumber]) {
      return false;
    }

    return this.selectedOption[questionNumber] === option;
  }

  submitQuiz() {
    localStorage.setItem('quizQuestions', JSON.stringify(this.quizQuestions));
    localStorage.setItem(
      'selectedAnswers',
      JSON.stringify(this.selectedOption)
    );
    localStorage.setItem('correctAnswers', JSON.stringify(this.correctAnswers));
    this.router.navigate(['/result']);
  }

  decodeEntities(encodedString: string) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
  }
}
