import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionHomeComponent } from './question-home/question-home.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: QuestionHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {
}
