import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizModel } from '../../models/quiz.model';
import { QuestionBusService } from '../question-bus.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  @Input()
  quiz: QuizModel | any = {};

  step?: number = 0;

  @Output()
  changes: EventEmitter<string> = new EventEmitter<string>();

  constructor(public questionBusService: QuestionBusService) {
  }

  ngOnInit(): void {
    this.questionBusService.isAnswered.asObservable().subscribe(res => {
      const previousQuestion = this.questionBusService.responseState.getValue();
      if (previousQuestion.state === 'error') {
        this.step = previousQuestion.questionId;
      }

    });

    this.questionBusService.responseState.asObservable().subscribe(res => {
      if (res.state === 'success') {
        this.questionBusService.responseList.push(res);
      }

      // @ts-ignore
      const response = Array.from(new Set(this.questionBusService.responseList.map(JSON.stringify))).map(JSON.parse);
      console.log(response);
      if ((this.step === this.quiz.questions.length) && (response.length === this.quiz.questions.length)) {
        this.changes.emit('complete');
      }
    });
  }

  changeStep(step: number): void {
    this.step = step;
  }
}
