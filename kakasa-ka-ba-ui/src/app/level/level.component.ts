import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  category: string = "" ;

  levels = [
    {
      color: "red",
      value: 1,
      points: 50
    },
    {
      color: "blue",
      value: 2,
      points: 100
    },
    {
      color: "green",
      value: 3,
      points: 150
    },
    {
      color: "darkorange",
      value: 4,
      points: 200
    },
    {
      color: "purple",
      value: 5,
      points: 250
    },
  ]

  constructor(private _activatedRoute: ActivatedRoute, private question: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    this.category = routeParams.get('id') || "";
    if(this.category === "jologology"){
      this.question.set(this.category, 0);
      this.router.navigate(["question", this.category, 0]);
    } 
  }

  click(level: number){
    this.question.set(this.category, level);

    this.router.navigate(["question", this.category, level]);
  }

  disabled(level: number){
    return this.question.levelDisabled(this.category, level);
  }

}
