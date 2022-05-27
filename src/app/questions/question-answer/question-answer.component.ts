import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { QuizModel } from '../../models/quiz.model';
import { QuestionBusService } from '../question-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit, OnDestroy {

  @Input()
  quiz: QuizModel | any = {};

  step?: number = 0;

  subscription: Subscription[] = [];

  @Output()
  changes: EventEmitter<string> = new EventEmitter<string>();

  constructor(public questionBusService: QuestionBusService) {
  }

  ngOnInit(): void {
    this.subscription[0] = this.questionBusService.isAnswered.asObservable().subscribe(res => {
      const previousQuestion = this.questionBusService.responseState.getValue();
      if (previousQuestion.state === 'error') {
        this.step = previousQuestion.questionId;
      }

    });

    this.subscription[1] = this.questionBusService.responseState.asObservable().subscribe(res => {
      if (res.state === 'success') {
        console.log(this.questionBusService.responseList);
        console.log(res);
        this.questionBusService.responseList.push(res);
      }

      if (this.step === this.quiz.questions.length && res.state === 'error') {
        this.step = this.step - 1;
      }

      // @ts-ignore
      const response = Array.from(new Set(this.questionBusService.responseList.map(JSON.stringify))).map(JSON.parse);
      // this.questionBusService.responseList = response;
      if ((this.step === this.quiz.questions.length) && (response.length === this.quiz.questions.length)) {
        this.changes.emit('complete');
      }
    });
  }

  changeStep(step: number): void {
    this.step = step;

    // console.log('responseList', this.questionBusService.responseList);
    // console.log('answerList', this.questionBusService.answerList);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    });
  }
}
