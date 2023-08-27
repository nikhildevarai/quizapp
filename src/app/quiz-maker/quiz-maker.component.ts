import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/categoryServices';
import { QuizQuestionsService } from 'src/services/quizQuestionService';
import {
  AnswersModel,
  ResultsApiResponse,
  categoriesModel,
  categoryListModel,
  questionModel,
} from '../app.model';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent {
  categories: categoriesModel[] = [];
  selectedCategory: string | null = null;
  selectedDifficulty: string | null = null;
  quizQuestions: questionModel[] = [];
  correctAnswers: string[] = [];

  constructor(
    private categoryService: CategoryService,
    private quizQuestionsService: QuizQuestionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchCategories();

    localStorage.removeItem('quizQuestions');
    localStorage.removeItem('selectedAnswers');
    localStorage.removeItem('correctAnswers');
  }

  // Implementing the CategoryService in the quiz component
  fetchCategories() {
    this.categoryService
      .fetchCategories()
      .subscribe((data: categoryListModel) => {
        this.categories = data.trivia_categories;
      });
  }

  // For the selectCategory button to show the dropdown when the user tries to select the dropdown
  onCategoryChange(event: Event): void {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
  }

  // For the difficultyCategory button to show the dropdown when the user tries to select the dropdown
  onDifficultyChange(event: Event): void {
    this.selectedDifficulty = (event.target as HTMLSelectElement).value;
  }

  shuffleArray = (array: string[]): string[] => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  // To create the quizQuestions
  createQuiz() {
    if (this.selectedCategory && this.selectedDifficulty) {
      const apiUrl = `https://opentdb.com/api.php?amount=5&category=${this.selectedCategory}&difficulty=${this.selectedDifficulty}&type=multiple`;

      // Fetch quiz questions using the QuizQuestionsService
      this.quizQuestionsService
        .fetchQuizQuestions(apiUrl)
        .subscribe((quizQuestions: ResultsApiResponse) => {
          this.correctAnswers = [];
          this.quizQuestions = quizQuestions.results.map(
            (item: AnswersModel, index: number) => {
              this.correctAnswers[index] = item.correct_answer;
              const options = [...item.incorrect_answers, item.correct_answer];
              const shaffledOptions = this.shuffleArray(options);
              return {
                ...item,
                options: shaffledOptions,
              };
            }
          );
        });
    } else {
      console.log('Select category and difficulty to create a quiz.');
    }
  }
}
