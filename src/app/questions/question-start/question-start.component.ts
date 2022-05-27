import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestionBusService } from '../question-bus.service';

@Component({
  selector: 'app-question-start',
  templateUrl: './question-start.component.html',
  styleUrls: ['./question-start.component.scss']
})
export class QuestionStartComponent implements OnInit {

  @Output()
  getQuiz: EventEmitter<string> = new EventEmitter<string>();

  constructor(private questionBusService: QuestionBusService) {
  }

  ngOnInit(): void {
  }

  start(): void {
    this.questionBusService.answerList = [];
    this.questionBusService.responseList = [];
    this.questionBusService.responseState.next({});
    this.getQuiz.emit('progress');
  }
}
