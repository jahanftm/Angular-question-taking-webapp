import { Injectable } from '@angular/core';
import { BaseApiClient } from './base-api-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer, QuizModel } from '../../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService extends BaseApiClient {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getQuiz(): Observable<QuizModel> {
    return this.get('quiz');
  }

  sendAnswer(data: Answer): Observable<any> {
    return this.post('answer', data);
  }

}
