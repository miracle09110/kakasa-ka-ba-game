import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { CategoryComponent } from './category/category.component';
import { LevelComponent } from './level/level.component';
import { NextButtonComponent } from './widget/next-button/next-button.component';
import { CircularButtonComponent } from './widget/circular-button/circular-button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    CategoryComponent,
    LevelComponent,
    NextButtonComponent,
    CircularButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
