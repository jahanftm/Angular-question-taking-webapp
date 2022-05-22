import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizModel } from '../../models/quiz.model';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  @Input()
  quiz: QuizModel | any = {};

  step = 0;

  @Output()
  changes: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  changeStep(step: number): void {
    this.step = step;

    if (this.step === this.quiz.questions.length) {
      console.log('here');

      this.changes.emit('complete');
    }
  }
}
