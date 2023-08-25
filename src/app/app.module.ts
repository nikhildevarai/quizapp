import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryService } from 'src/services/categoryServices';
import { QuizQuestionsService } from 'src/services/quizQuestionService';
import { QuizService } from 'src/services/quizService';
import { ResultComponent } from './result/result.component';
import { QuizMakerComponent } from './quiz-maker/quiz-maker.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    QuizMakerComponent,
    QuizQuestionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoryService, QuizQuestionsService, QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
