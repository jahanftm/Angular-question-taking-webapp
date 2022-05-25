import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionHomeComponent } from './questions/question-home/question-home.component';

const routes: Routes = [{
  path: 'quiz',
  component: QuestionHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
