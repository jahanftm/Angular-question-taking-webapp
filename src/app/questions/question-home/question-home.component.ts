import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizModel } from '../../models/quiz.model';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.scss']
})
export class QuestionHomeComponent implements OnInit {

  step: 'start' | 'progress' | 'complete' | string = 'complete';

  quiz: QuizModel = {
    id: 1001,
    questions: [
      {
        id: 101,
        text: 'What is the capital of France?',
        answers: [
          {
            text: 'Paris',
            index: 0
          },
          {
            text: 'Vienna',
            index: 1
          },
          {
            text: 'Marseille',
            index: 2
          },
          {
            text: 'London',
            index: 3
          }
        ]
      },
      {
        id: 101,
        text: 'What is the capital of Iran?',
        answers: [
          {
            text: 'Tehran',
            index: 0
          },
          {
            text: 'London',
            index: 1
          },
          {
            text: 'Marseille',
            index: 2
          },
          {
            text: 'Paris',
            index: 3
          }
        ]
      },
      {
        id: 101,
        text: 'What is the capital of Japan?',
        answers: [
          {
            text: 'Tokyo',
            index: 0
          },
          {
            text: 'London',
            index: 1
          },
          {
            text: 'Marseille',
            index: 2
          },
          {
            text: 'Paris',
            index: 3
          }
        ]
      }
    ]
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changeStep(evt: string): void {
    this.step = evt;
  }
}
