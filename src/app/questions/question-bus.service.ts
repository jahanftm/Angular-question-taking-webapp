import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuizModel } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionBusService {

  sentAnswer: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isAnswered: BehaviorSubject<{ questionId?: number, answer?: boolean }> = new BehaviorSubject<{ questionId?: number, answer?: boolean }>({});

  userScore: number = 0;

  count: number = 0;

  answerList: any = [];

  constructor() {
  }
}
