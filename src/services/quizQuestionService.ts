import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultsApiResponse } from 'src/app/app.model';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionsService {
  selectedCategory: string | null = null;
  selectedDifficulty: string | null = null;

  constructor(private http: HttpClient) {}

  fetchQuizQuestions(apiUrl: string): Observable<ResultsApiResponse> {
    return this.http.get<ResultsApiResponse>(apiUrl);
  }
}
