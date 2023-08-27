import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryListModel } from 'src/app/app.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<categoryListModel> {
    const apiUrl = 'https://opentdb.com/api_category.php';
    return this.http.get<categoryListModel>(apiUrl);
  }
}
