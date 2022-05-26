import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionBusService {

  // it uses to keep the state of  response from post API (error or success)
  responseState: BehaviorSubject<{ state?: string, questionId?: number }> = new BehaviorSubject<{ state?: string, questionId?: number }>({});

  isAnswered: BehaviorSubject<{ questionId?: number, answer?: boolean }> = new BehaviorSubject<{ questionId?: number, answer?: boolean }>({});

  answerList: any = [];

  responseList: any = [];

  constructor() {
  }
}
