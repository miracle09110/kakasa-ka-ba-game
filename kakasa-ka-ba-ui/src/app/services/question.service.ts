import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HEKASI_QUESTIONS } from '../question/questions/hekasi';
import { JOLOGOLOGY } from '../question/questions/jologology';
import { SINIT_AT_MUSIKA_QUESTIONS } from '../question/questions/sining-at-musika';
import { SIPINAYAN_QUESTIONS } from '../question/questions/sipnayan';
import { SIYENSIA_QUESTIONS } from '../question/questions/siyensia';

export interface Question {
  category: string,
  level: number,
  value: string,
  image?: string,
  answer?: any,
  completed: boolean,
  choices: string[]
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [
    ...SIPINAYAN_QUESTIONS,
    ...SIYENSIA_QUESTIONS,
    ...SINIT_AT_MUSIKA_QUESTIONS,
    ...HEKASI_QUESTIONS,
    ...JOLOGOLOGY
  ]
  
  subj = new BehaviorSubject<Question>({
    category: "",
    level: 0,
    value: "",
    completed: false,
    choices: []
  });

  constructor() { }

  get(){
    return this.subj.asObservable();
  }

  set(category: string, level: number){
    const question = this.questions.find((question) =>{
      return question.category === category && question.level === level && !question.completed;
    })

    if (question){
      question.completed = true;
      this.subj.next(question);
    }else{
      this.subj.next({
        category: "",
        level: 0,
        value: "",
        completed: false,
        choices: []
      })
    }
   
    return this;
  }

  categoryDisabled(category: string){
    let disabled = true;


    for (let i = 0; i < this.questions.length; i++){
      if(this.questions[i].category === category && !this.questions[i].completed){
        disabled = false;
        break;
      }
    }


    return disabled;
    
  }

  levelDisabled(category: string, level: number){
    let disabled = true;


    for (let i = 0; i < this.questions.length; i++){
      if(this.questions[i].category === category 
        && this.questions[i].level === level
        && !this.questions[i].completed){

        disabled = false;
        break;
      }
    }

    return disabled;
    
  }
}
