import { Injectable } from '@angular/core';
import { BaseApiClient } from './base-api-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer, Answering, QuizModel } from '../../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseApiClient {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getQuiz(): Observable<QuizModel> {
    return this.get('http://localhost:9000/quiz');
  }

  sendAnswer(data: Answering, param: string): Observable<any> {
    return this.post(`http://localhost:9000/answer?${param}`, data);
  }

}
