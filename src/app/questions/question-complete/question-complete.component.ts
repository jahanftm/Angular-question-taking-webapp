import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { QuestionBusService } from '../question-bus.service';

@Component({
  selector: 'app-question-complete',
  templateUrl: './question-complete.component.html',
  styleUrls: ['./question-complete.component.scss']
})
export class QuestionCompleteComponent implements OnInit, OnDestroy {

  userScore: number = 0;

  @Input()
  toTalScore?: number;

  @Output()
  changeStep: EventEmitter<string> = new EventEmitter();

  constructor(private questionBusService: QuestionBusService) {
  }

  ngOnInit(): void {
    this.questionBusService.answerList.forEach((x: any) => {
      if (x.answer) {
        this.userScore++;
      }
    });

  }

  onClicked(): void {
    this.changeStep.emit('start');
  }

  ngOnDestroy(): void {
    this.questionBusService.answerList = [];
    this.questionBusService.count = 0;
  }
}
