import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  question: Question = {
    category: "",
    level: 0,
    value: "",
    completed: false,
    choices: []
  };

  category: string = "";
  level: string = ""

  showBackdrop = false;
  backdropColor = "";
  showButtons = true;
  showSteal = false;

  constructor(private questionService: QuestionService, private router: Router, 
    private _activatedRoute: ActivatedRoute ) { 
  
  }

  ngOnInit(): void {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    this.category = routeParams.get('category') || "";
    this.level = routeParams.get('level') || "";


    this.questionService.get().subscribe((question) => {

      if(!question.value){
        this.router.navigate([""])
      }

      this.question = question;
    })
  }

  done(){
    this.router.navigate([""]);
  }

  wrong(){
    this.showBackdrop = true;
    this.backdropColor = "red"
    this.showButtons = false;
    this.showSteal = true;
  }

  correct(){
    this.showBackdrop = true;
    this.backdropColor = "green"
    this.showButtons = false

    setTimeout(() => {
      this.router.navigate([""]);
    }, 2000)
  }
}
