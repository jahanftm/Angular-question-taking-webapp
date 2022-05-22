import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-complete',
  templateUrl: './question-complete.component.html',
  styleUrls: ['./question-complete.component.scss']
})
export class QuestionCompleteComponent implements OnInit {

  userScore?: number;

  @Input()
  toTalScore?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
