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

    const data = {questionId: this.question?.id, answerIndex: evt};
    let param = '';

    if (this.question?.id !== 0 && this.questionBusService.count % 4 === 0) {
      console.log(this.question?.id, this.questionBusService.count, this.questionBusService.count % 4);
      param = 'br=true';
    }
    this.questionService.sendAnswer(data, param).subscribe(res => {

      this.questionBusService.sentAnswer.next('success');
      this.questionBusService.count++;

    }, error => {
      console.log(this.currentStep);
      this.questionBusService.sentAnswer.next('error');
      this.changeStep.emit(this.currentStep);
    });

    if (Number(evt.value) === 0) {
      // console.log(true);
      this.selectedAnswer(true);
      setTimeout(() => {

        this.changeStep.emit(this.currentStep + 1);
      }, 500);
      return;
    }
    // console.log(false);

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

}
