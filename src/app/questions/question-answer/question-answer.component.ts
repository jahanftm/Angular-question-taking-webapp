import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  a = [{
    text: 'a',
    index: 0
  },
    {
      text: 'b',
      index: 0
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
