export interface categoriesModel {
  name: string;
  id: number;
}

export interface questionModel {
  question: string;
  options: string[];
}

export interface answersModel {
  correct_answer: string;
  incorrect_answers: string[];
}

export interface categoryListModel {
  trivia_categories: {
    name: string;
    id: number;
  }[];
}

export interface AnswersModel {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizQuestion extends AnswersModel {
  options: string[];
}

export interface ResultsApiResponse {
  results: AnswersModel[];
}
