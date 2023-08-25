import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  fetchQuizData(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }
}
