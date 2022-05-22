import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionHomeComponent } from './question-home/question-home.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { QuestionBoxComponent } from './question-answer/question-box/question-box.component';
import { QuestionCompleteComponent } from './question-complete/question-complete.component';


@NgModule({
  declarations: [
    QuestionHomeComponent,
    QuestionAnswerComponent,
    QuestionBoxComponent,
    QuestionCompleteComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
