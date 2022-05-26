import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../../models/quiz.model';
import { QuestionBusService } from '../../question-bus.service';
import { QuestionService } from '../../../core/api/question.service';

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

  questionStatus?: boolean;

  isAnswered: boolean = false;

  constructor(private questionBusService: QuestionBusService,
              private questionService: QuestionService) {
  }

  ngOnInit(): void {
  }

  onItemSelected(evt: any): void {
    this.questionStatus = true;
    this.questionBusService.isAnswered.next({questionId: this.question?.id, answer: true});

    this.postAnswer(Number(evt.value));

    if (Number(evt.value) === 0) {
      // console.log(true);
      this.selectedAnswer(true);
      setTimeout(() => {

        this.changeStep.emit(this.currentStep + 1);
      }, 500);
      return;
    }

    this.selectedAnswer(false);
    setTimeout(() => {
      this.changeStep.emit(this.currentStep + 1);
    }, 500);
  }

  selectedAnswer(value: boolean): void {
    const index = this.questionBusService.answerList.findIndex((x: any) => x.questionId === this.question?.id);

    if (index !== -1) {
      this.questionBusService.answerList.splice(index, 1);
      this.questionBusService.answerList.push({questionId: this.question?.id, answer: value});
      return;
    }
    this.questionBusService.answerList.push({questionId: this.question?.id, answer: value});
  }

  postAnswer(answer: number): void {
    const data = {questionId: this.question?.id, answerIndex: answer};
    let param = '';
    if (this.question?.id !== 0 && this.questionBusService.answerList.length % 4 === 0) {
      param = 'br=true';
    }

    this.questionService.sendAnswer(data, param).subscribe(res => {
      this.questionBusService.responseState.next({state: 'success', questionId: this.question?.id});
      console.log(res);

    }, error => {
      this.questionBusService.responseState.next({state: 'error', questionId: this.question?.id});
      // this.changeStep.emit(this.currentStep);
    });
  }

}
