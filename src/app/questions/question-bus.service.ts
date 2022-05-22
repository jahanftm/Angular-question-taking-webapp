import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { QuizModel } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionBusService {

  quizList: Subject<QuizModel> = new Subject<QuizModel>();

  constructor() {
  }
}
