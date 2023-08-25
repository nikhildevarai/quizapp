import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionsService {
  selectedCategory: string | null = null;
  selectedDifficulty: string | null = null;

  constructor(private http: HttpClient) {}

  fetchQuizQuestions(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }
}
