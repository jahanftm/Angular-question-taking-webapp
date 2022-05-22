import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionHomeComponent } from './question-home/question-home.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';


@NgModule({
  declarations: [
    QuestionHomeComponent,
    QuestionAnswerComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
