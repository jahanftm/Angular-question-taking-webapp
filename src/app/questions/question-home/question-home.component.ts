import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.scss']
})
export class QuestionHomeComponent implements OnInit {

  step = 1;

  lists = [
    {
      question: 'test',
      answers: ['a', 'b', 'c', 'd'],
      correctAnswer: 'b'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToQuiz(): void {
    this.step = 2;
  }
}
