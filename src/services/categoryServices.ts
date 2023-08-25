import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<any> {
    const apiUrl = 'https://opentdb.com/api_category.php';
    return this.http.get(apiUrl);
  }
}
