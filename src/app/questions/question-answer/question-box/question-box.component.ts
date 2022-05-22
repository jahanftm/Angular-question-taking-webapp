import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../../models/quiz.model';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent implements OnInit {

  @Output()
  changeStep: EventEmitter<number> = new EventEmitter();

  @Input()
  currentStep: number = 0;

  @Input()
  question?: Question;

  // 1 -> success, 2-> error
  status?: number;

  constructor() {

  }

  ngOnInit(): void {
    console.log('YY', this.currentStep);
  }

  onItemChange(evt: any): void {
    if (Number(evt.value) === 0) {
      this.status = 1;
      setTimeout(() => {
        this.changeStep.emit(this.currentStep + 1);
      }, 1000);
      return;
    }
    this.status = 0;
    setTimeout(() => {
      this.changeStep.emit(this.currentStep + 1);
    }, 1000);
  }
}
