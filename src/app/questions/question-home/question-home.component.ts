import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizModel } from '../../models/quiz.model';
import { QuestionService } from '../../core/api/question.service';
import { QuestionBusService } from '../question-bus.service';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.scss']
})
export class QuestionHomeComponent implements OnInit {

  step: 'start' | 'progress' | 'complete' | string = 'start';

  quiz?: QuizModel;

  constructor(private router: Router,
              private questionService: QuestionService,
              private questionBusService: QuestionBusService) {
  }

  ngOnInit(): void {
  }

  changeStep(evt: string): void {
    if (evt !== 'progress') {
      this.step = evt;
      return;
    }

    this.questionService.getQuiz().subscribe(res => {
      this.step = 'progress';
      this.quiz = res;
    });
  }
}
