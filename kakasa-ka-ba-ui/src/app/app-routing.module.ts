import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LevelComponent } from './level/level.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: "",
    component: CategoryComponent,
    data: {
      animation: 'FilterPage'
    }
  },
  {
    path: "category/:id",
    component: LevelComponent,
  },
  {
    path: "question/:category/:level",
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
