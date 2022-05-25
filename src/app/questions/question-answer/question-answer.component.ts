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

  step = 0;

  @Output()
  changes: EventEmitter<string> = new EventEmitter<string>();

  constructor(public questionBusService: QuestionBusService) {
  }

  ngOnInit(): void {

    // this.questionBusService.isAnswered.asObservable().subscribe(res => {
    //   const previousQuestion = this.questionBusService.sentAnswer.getValue();
    //   if (res.questionId === this.step && res.answer && previousQuestion === 'error') {
    //     this.step--;
    //   }
    // });
  }

  changeStep(step: number): void {
    this.step = step;

    if (this.step === this.quiz.questions.length) {
      this.changes.emit('complete');
    }
  }
}
